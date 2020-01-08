import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export class ListUI {
    searchTerm: string;
    filter: string;
    page: number;
}

const initValue =  {
        searchTerm: '',
        filter: 'all',
        page: 1
    } as ListUI;

  @Injectable()
export class ListUIService extends BehaviorSubject<ListUI> {
    currentValue: ListUI;

    constructor(){
        super(initValue);
        this.currentValue = initValue;    
    }

    updateParam(o) {
        this.currentValue = {
            ...this.currentValue,
            ...o
        };

        this.next(this.currentValue);
    }
}