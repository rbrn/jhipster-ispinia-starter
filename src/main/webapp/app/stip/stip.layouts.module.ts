import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {BsDropdownModule} from 'ngx-bootstrap';

import {StipStarterViewComponent} from './appviews/stip.starterview.component';
import {StipDashboard1Component} from './appviews/stip.dashboard1.component';
import {FlotChartDirective} from './appviews/flotChart';
import {StipFooterComponent} from './layouts/footer/stip.footer.component';
import {StipNavigationComponent} from './layouts/navigation/stip.navigation.component';
import {StipTopNavbarComponent} from './layouts/navigation/stip.topnavbar.component';
import {StipTopnavigationnavbarComponent} from './layouts/navigation/stip.topNavigationNavbar.component';
import {StipBasicLayoutComponent} from './layouts/stip.basicLayout.component';

@NgModule({
  declarations: [
      StipTopNavbarComponent,
      StipNavigationComponent,
      StipFooterComponent,
      StipTopnavigationnavbarComponent, StipStarterViewComponent,
      StipDashboard1Component, FlotChartDirective,
      StipBasicLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
      StipTopNavbarComponent,
      StipNavigationComponent,
      StipFooterComponent,
      StipTopnavigationnavbarComponent, StipStarterViewComponent,
      StipDashboard1Component, FlotChartDirective, StipBasicLayoutComponent
  ],
})

export class StipLayoutsModule {}
