import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AccountingTableComponent } from './accounting-table/accounting-table.component';


import { AccoutningTableService } from './accounting-table/accounting-table.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountingTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AccoutningTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
