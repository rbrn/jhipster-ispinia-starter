import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {BsDropdownModule} from 'ngx-bootstrap';

import {StarterViewComponent} from './appviews/starterview.component';
import {StipTopNavbarComponent} from '../layouts/navigation/inspinia/stip.topnavbar.component';
import {StipNavigationComponent} from '../layouts/navigation/inspinia/stip.navigation.component';
import {StipTopnavigationnavbarComponent} from '../layouts/navigation/inspinia/stip.topnavigationnavbar.component';
import {LoginComponent} from './appviews/login.component';
import {StipFooterComponent} from '../layouts/footer/ispinia/stip.footer.component';
import {Dashboard1Component} from './appviews/dashboard1.component';
import {FlotChartDirective} from './appviews/flotChart';
import {BasicLayoutComponent} from './layouts/basicLayout.component';
import {BlankLayoutComponent} from './layouts/blankLayout.component';

@NgModule({
  declarations: [
      StipTopNavbarComponent,
      StipNavigationComponent,
      StipFooterComponent,
      StipTopnavigationnavbarComponent,
      BasicLayoutComponent, StarterViewComponent, BlankLayoutComponent, LoginComponent,
      Dashboard1Component, FlotChartDirective
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
      StipTopnavigationnavbarComponent,
      BasicLayoutComponent, StarterViewComponent, BlankLayoutComponent, LoginComponent,
      Dashboard1Component, FlotChartDirective
  ],
})

export class LayoutsModule {}
