import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {expandAnimation} from './ExpandAnimation';

@Component({
  selector: 'app-ws-reusable-table',
  templateUrl: './ws-reusable-table.component.html',
  animations: [expandAnimation]
})
export class WsReusableTableComponent implements OnInit, OnChanges {
  @Input() tableData: any = [];
  @Input() wantedFields: any = [];
  tableDataForView: Array<any> = [];
  headerCheckboxes: any = [];
  openedCheckboxes = false;
  isFilterActive = false;
  @Output() searchChanged = new EventEmitter<{ key: string, searchQuery: string }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tableData && changes.tableData.currentValue) {
      this.configureTable();
    }
    if (changes.wantedFields && changes.wantedFields.currentValue) {
      this.configureCheckboxes();
    }
  }

  emitSearchChanged(event: any, field: any): void {
    for (const data of Object.entries(this.tableDataForView[0])) {
      // @ts-ignore
      data[1].searchModel = '';
    }
    field.value.searchModel = event;
    this.tableDataForView[0][field.key].searchModel = event;
    this.searchChanged.emit({key: field.key, searchQuery: event});
  }

  configureTable(): void {
    const tableDataTemp = this.tableDataForView[0];
    this.tableDataForView = [];
    this.tableData.forEach((data: any, index: number) => {
      const obj: any = {};
      for (const key in data) {
        const fieldIndex = this.wantedFields.findIndex((x: any) => x.name === key);
        if (fieldIndex !== -1) {
          obj[key] = {
            name: key,
            value: data[key],
            isExpanded: true,
            isHidden: false,
            search: this.wantedFields[fieldIndex].search,
          };
          if (index === 0 && this.wantedFields[fieldIndex].search && tableDataTemp && !tableDataTemp[key].searchModel) {
            obj[key].searchModel = '';
          } else if (index === 0 && tableDataTemp && tableDataTemp[key].searchModel) {
            obj[key].searchModel = tableDataTemp[key].searchModel;
          }
          if (index === 0) {
            obj[key].nameForView = this.wantedFields[fieldIndex].nameForView;
          }
        }
      }
      if (obj) {
        this.tableDataForView.push(obj);
      }
    });
  }

  configureCheckboxes(): void {
    this.wantedFields.forEach((field: any) => {
      console.log('FIELDDD');
      this.headerCheckboxes.push({name: field.name, isHidden: false, id: 1, search: field.search, nameForView: field.nameForView});
      field.isExpanded = true;
      field.isExpanded = false;
    });
  }

  returnSpecificVal(obj: any, valToRet: string): any {
    return obj.value[valToRet];
  }

  toggleExpandFieldOrHideColumn(columnName: any, objPropToChange: string): void {
    this.tableDataForView.forEach((data: any) => {
      data[columnName][objPropToChange] = !data[columnName][objPropToChange];
    });
  }

  openSingleView(id: any): void {
  }

  openCheckboxes(event: any): void {
    this.openedCheckboxes = !this.openedCheckboxes;
  }

}
