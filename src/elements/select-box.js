import {Behavior} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class SelectBox {
    static metadata() {
        return Behavior
            .customElement('select-box')
            .withProperty('options')
            .withProperty('name');
    }

    static inject() { return [EventAggregator]; }
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
        this.value = '';
    }

    valueChanged() {
        this.eventAggregator.publish(`${this.name}Changed`, this.value);
    }
}