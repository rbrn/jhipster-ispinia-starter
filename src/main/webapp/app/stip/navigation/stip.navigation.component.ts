import {AfterViewInit, Component} from '@angular/core';
import {Router} from '@angular/router';
import 'jquery-slimscroll';

declare var jQuery: any;

@Component({
  selector: 'jhi-stip-navigation',
  templateUrl: 'navigation.template.html'
})

export class StipNavigationComponent implements AfterViewInit {

  constructor(private router: Router) {}

  ngAfterViewInit() {
    jQuery("#side-menu").metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }


}
