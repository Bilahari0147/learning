import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {EducationComponent } from './education/education.component';
import { Success } from './alert/success.component';
import { Warning } from './alert/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    Success,
    Warning
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
