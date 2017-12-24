import { Component } from '@angular/core';
import {Router} from '@angular/router';
//import { smoothlyMenu } from '../../../app.helpers';
declare var jQuery:any;

@Component({
  selector: 'stiptopnavigationnavbar',
  templateUrl: 'topnavigationnavbar.template.html'
})
export class StipTopnavigationnavbarComponent {

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    //smoothlyMenu();
  }

}
