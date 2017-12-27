import { Component } from '@angular/core';
import {smoothlyMenu} from "../../helpers/app.helpers";

declare var jQuery: any;

@Component({
  selector: 'jhi-stip-topnavbar',
  templateUrl: 'topnavbar.template.html'
})
export class StipTopNavbarComponent {

  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

}
