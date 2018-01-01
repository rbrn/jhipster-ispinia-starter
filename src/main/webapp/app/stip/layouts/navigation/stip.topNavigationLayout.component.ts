import {Component, OnInit} from '@angular/core';
import {detectBody} from "../helpers/app.helpers";


declare var jQuery: any;

@Component({
  selector: 'topnavigationlayout',
  templateUrl: 'stip.topNavigationLayout.template.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class TopNavigationLayoutComponent implements OnInit{

  public ngOnInit():any {
    detectBody();
  }

  public onResize(){
    detectBody();
  }

}
