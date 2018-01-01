import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {StipStarterViewComponent} from './stip.starterview.component';


@NgModule({
  declarations: [
    StipStarterViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    StipStarterViewComponent
  ],
})

export class StipAppViewsModule {
}
