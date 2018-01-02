import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {StipStarterViewComponent} from './stip.starterview.component';
import {StipDashboard1Component} from './stip.dashboard1.component';
import {FlotChartDirective} from './flotChart';

@NgModule({
  declarations: [
    StipStarterViewComponent, StipDashboard1Component, FlotChartDirective
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    StipStarterViewComponent, StipDashboard1Component, FlotChartDirective
  ],
})

export class StipAppViewsModule {
}
