import {Behavior} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class Filter {
    static metadata() {
        return Behavior
            .customElement('filter')
            .withProperty('value')
            .withProperty('placeholder')
            .withProperty('name');
    }

    static inject() { return [EventAggregator]; }
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
    }

    valueChanged() {
        this.eventAggregator.publish(`${this.name}Changed`, this.value);
    }
}