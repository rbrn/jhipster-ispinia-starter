import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {StarterViewComponent} from './starterview.component';


@NgModule({
  declarations: [
    StarterViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    StarterViewComponent
  ],
})

export class AppviewsModule {
}
