import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WsSearchInputComponent } from './ws-search-input.component';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [
        WsSearchInputComponent
    ],
    exports: [
        WsSearchInputComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WsSearchInputModule { }
