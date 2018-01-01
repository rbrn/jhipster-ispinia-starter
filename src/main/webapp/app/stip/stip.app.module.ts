import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {STIP_LAYOUT_ROUTES} from './stip.app.routes';
import {AppComponent} from './stip.app.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {FlotModule} from './appviews/flotChart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, BsDropdownModule.forRoot(), FlotModule,
    RouterModule.forRoot(
        STIP_LAYOUT_ROUTES,
        { enableTracing: true }
    )
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class StipAppModule { }
