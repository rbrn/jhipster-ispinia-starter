import {AfterViewInit, Component} from '@angular/core';
import {Router} from '@angular/router';

declare var jQuery: any;
import * as $ from 'jquery';
import 'metismenu';

@Component({
  selector: 'jhi-stip-navigation',
  templateUrl: 'stip.navigation.template.html'
})

export class StipNavigationComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit() {
    $('#side-menu').metisMenu();

    if ($('body').hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }

}
