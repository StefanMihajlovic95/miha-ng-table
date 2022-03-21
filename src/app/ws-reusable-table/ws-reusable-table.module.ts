import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WsReusableTableComponent } from './ws-reusable-table.component';
import {FormsModule} from '@angular/forms';
import {WsSearchInputModule} from '../ws-search-input/ws-search-input.module';

@NgModule({
    declarations: [
        WsReusableTableComponent
    ],
    exports: [
        WsReusableTableComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    WsSearchInputModule,
    WsSearchInputModule
  ]
})
export class WsReusableTableModule { }
