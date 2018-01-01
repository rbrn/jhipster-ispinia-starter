import {Routes} from '@angular/router';
import {StarterViewComponent} from './appviews/starterview.component';
import {Dashboard1Component} from './appviews/dashboard1.component';
import {BasicLayoutComponent} from './layouts/basicLayout.component';

export const ROUTES: Routes = [
    // Main redirect
    // App views
    {
        path: 'dashboards', component: BasicLayoutComponent,
        children: [
            {path: 'dashboard1', component: Dashboard1Component},
        ]
    },

    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {
        path: 'main', component: BasicLayoutComponent,
        children: [
            {path: '', component: StarterViewComponent}
        ]
    }
];
