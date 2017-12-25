import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {BsDropdownModule} from 'ngx-bootstrap';

import {StarterViewComponent} from './appviews/starterview.component';
import {StipTopnavigationnavbarComponent} from './topnavbar/stip.topnavigationnavbar.component';
import {StipFooterComponent} from './layouts/stip.footer.component';
import {StipNavigationComponent} from './navigation/stip.navigation.component';
import {StipTopNavbarComponent} from './topnavbar/stip.topnavbar.component';
import {BasicLayoutComponent} from './layouts/basicLayout.component';


@NgModule({
  declarations: [
      StipTopNavbarComponent,
      StipNavigationComponent,
      StipFooterComponent,
      StipTopnavigationnavbarComponent,
      BasicLayoutComponent, StarterViewComponent
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
      BasicLayoutComponent, StarterViewComponent
  ],
})

export class LayoutsModule {}
