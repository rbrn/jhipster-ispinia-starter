import {Routes} from '@angular/router';
import {StarterViewComponent} from './appviews/starterview.component';
import {LoginComponent} from './appviews/login.component';
import {Dashboard1Component} from './appviews/dashboard1.component';
import {BasicLayoutComponent} from './layouts/basicLayout.component';
import {BlankLayoutComponent} from './layouts/blankLayout.component';

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
    },

    {
        path: 'login', component: BlankLayoutComponent,
        children: [
            {path: '', component: LoginComponent},
        ]
    }
];
