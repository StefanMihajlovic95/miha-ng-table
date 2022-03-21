import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

export const INPUT_DEBOUNCE_TIME = 1000;

@Component({
    selector: 'app-ws-search-input',
    templateUrl: './ws-search-input.component.html'
})
export class WsSearchInputComponent implements OnInit, OnChanges {

    @Input() searchQuery = '';
    searchSubject = new Subject<string>();
    @Output() searchQueryChange = new EventEmitter<string>();
    @Output() searchChanged = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
        this.debounceSearch();
    }

    debounceSearch(): void {
        this.searchSubject.pipe(
            debounceTime(INPUT_DEBOUNCE_TIME),
            distinctUntilChanged())
        .subscribe(value => {
            this.searchQuery = value;
            this.searchQueryChange.emit(value);
            this.searchChanged.emit(this.searchQuery);
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Changes: ', changes);
    }


}
