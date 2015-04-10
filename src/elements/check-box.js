import {Behavior} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class CheckBox {
    static metadata() {
        return Behavior
            .customElement('check-box')
            .withProperty('checked')
            .withProperty('name');
    }

    static inject() { return [EventAggregator]; }
    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator;
    }

    valueChanged() {
        this.checked = !this.checked;
        this.eventAggregator.publish(`${this.name}Changed`, this.checked);
    }
}