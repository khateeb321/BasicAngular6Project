import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]="filter"/> <!-- To use ngModel use form module in parent -->
    `
})
export class FilterTextboxComponent implements OnInit {
        
    private _filter: string;
    @Input() get filter() { // using input here just beacuse maybe parent could send/set starting value
        return this._filter;
    }
    
    set filter(val: string) { 
        this._filter = val;
        this.changed.emit(this.filter); //Raise changed event, it should be caught in parent, use in directive as well
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();
    
    constructor() {}
    
    ngOnInit() {
        
    }
}