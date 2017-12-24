import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import {ROUTES} from "./app.routes";
import { AppComponent } from './app.component';
import {LayoutsModule} from "./layouts/layouts.module";
import {AppviewsModule} from "./appviews/appviews.module";
import {StipAppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
        ROUTES,
        { enableTracing: true }
    )
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
