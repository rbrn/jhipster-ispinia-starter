import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {STIP_LAYOUT_ROUTES} from './stip.app.routes';
import {BsDropdownModule} from 'ngx-bootstrap';
import {FlotModule} from './appviews/flotChart';

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule, BsDropdownModule.forRoot(), FlotModule,
        RouterModule.forRoot(STIP_LAYOUT_ROUTES)
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StipAppModule {
}
