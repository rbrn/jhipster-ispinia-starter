import {Component, OnInit} from '@angular/core';
import {detectBody} from './helpers/app.helpers';

declare var jQuery: any;

@Component({
  selector: 'basic',
  templateUrl: 'stip.basicLayout.template.html',
  host: {
    '(window:resize)': 'onResize()'
  }
 })
export class StipBasicLayoutComponent implements OnInit {

  public ngOnInit(): any {
    detectBody();
  }

  public onResize() {
    detectBody();
  }

}
