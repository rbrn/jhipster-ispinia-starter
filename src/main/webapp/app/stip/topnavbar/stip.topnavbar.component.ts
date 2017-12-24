import { Component } from '@angular/core';
//import { smoothlyMenu } from '../../../app.helpers';
declare var jQuery:any;

@Component({
  selector: 'stiptopnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class StipTopNavbarComponent {

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    //smoothlyMenu();
  }

}
