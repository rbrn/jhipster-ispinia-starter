import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {BsDropdownModule} from 'ngx-bootstrap';

import {StarterViewComponent} from './appviews/starterview.component';
import {Dashboard1Component} from './appviews/dashboard1.component';
import {FlotChartDirective} from './appviews/flotChart';
import {StipFooterComponent} from './layouts/footer/stip.footer.component';
import {StipNavigationComponent} from './layouts/navigation/stip.navigation.component';
import {StipTopNavbarComponent} from './layouts/navigation/stip.topnavbar.component';
import {StipTopnavigationnavbarComponent} from './layouts/navigation/stip.topnavigationnavbar.component';
import {BasicLayoutComponent} from './layouts/basicLayout.component';

@NgModule({
  declarations: [
      StipTopNavbarComponent,
      StipNavigationComponent,
      StipFooterComponent,
      StipTopnavigationnavbarComponent, StarterViewComponent,
      Dashboard1Component, FlotChartDirective,
      BasicLayoutComponent
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
      StipTopnavigationnavbarComponent, StarterViewComponent,
      Dashboard1Component, FlotChartDirective, BasicLayoutComponent
  ],
})

export class LayoutsModule {}
