import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WsReusableTableModule} from './ws-reusable-table/ws-reusable-table.module';
import {WsSearchInputModule} from './ws-search-input/ws-search-input.module';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    WsReusableTableModule,
    WsSearchInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
