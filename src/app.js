import {Data} from './data';
import {EventAggregator} from 'aurelia-event-aggregator';

export class App {
    static inject() { return [Data, EventAggregator]; }
    constructor(data, eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.filter = /./;
        this.filter2 = '';
        this.data = data.load();
        this.terms = Object.keys(this.data);
        this.selectedTerm = this.terms[0];
        this.pageInd = 1;
        this.pageSize = 2;
        this.pages = [];
        this.pageOptions = [2, 25, 50, 100, 'All'];
        this.setPages();
        this.subscribe();
        //this.filterTerms();
    }

    get term() {
        let {filter, filter2, pageInd: pgInd, pageSize: pgSize} = this;
        return this.data[this.selectedTerm]
            .filter( (el, ind) => {
                return filter.test(el.name)
                    && el.name.toLowerCase().includes(filter2.toLowerCase())
                    && ind >= (pgInd - 1) * (pgSize == Infinity ? 1 : pgSize)
                    && ind < (pgInd - 1) * (pgSize == Infinity ? 1 : pgSize) + pgSize;
            });
    }

    setPages() {
        let numItems = this.data[this.selectedTerm].length;
        let numPages = this.pageSize !== Infinity
            ? Math.ceil(numItems / this.pageSize)
            : 1;
        let pages = [];
        for(var i = 0; i < numPages; i++) {
            pages = pages.concat(i + 1);
        }
        this.pageInd = this.pageInd <= pages.length
            ? this.pageInd
            : 1;
        this.pages = pages;
    }

    changeTerm() {
        //this.selectedTerm = this.selectedTerm == 'term 1'
        //    ? 'term 2'
        //    : 'term 1';
    }

    subscribe() {
        this.eventAggregator.subscribe('termOptionsChanged', term => {
            this.selectedTerm = term;
            this.setPages();
        });
        this.eventAggregator.subscribe('pageOptionsChanged', pageSize => {
            this.pageSize = pageSize == 'All' ? Infinity : pageSize;
            this.setPages();
        });
        this.eventAggregator.subscribe('filterChanged', checked => {
            this.filter = checked
                ? /One/
                : /./;
        });
        this.eventAggregator.subscribe('searchChanged', search => {
            this.filter2 = search;
        });
        this.eventAggregator.subscribe('pagesChanged', pageInd => {
            this.pageInd = pageInd;
        });
    }
}