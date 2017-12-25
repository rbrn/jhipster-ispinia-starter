import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import {AppComponent} from './app.component';
import {BsDropdownModule} from "ngx-bootstrap";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, BsDropdownModule.forRoot(),
    RouterModule.forRoot(
        ROUTES,
        { enableTracing: true }
    )
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
