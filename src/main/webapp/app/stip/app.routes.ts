import {Routes} from "@angular/router";
import {BasicLayoutComponent} from "./layouts/basicLayout.component";
import {TopNavigationLayoutComponent} from "./layouts/topNavigationLayout.component";
import {StarterViewComponent} from "./appviews/starterview.component";
import {BlankLayoutComponent} from "./layouts/blankLayout.component";
import {LoginComponent} from "./appviews/login.component";

export const ROUTES:Routes = [
  // Main redirect
  {path: '', redirectTo: 'dashboards', pathMatch: 'full'},

  // App views
  {
    path: 'dashboards', component: BasicLayoutComponent
  },
  {
    path: 'dashboards', component: TopNavigationLayoutComponent
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      {path: 'starterview', component: StarterViewComponent}
    ]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },

  // Handle all other routes
  {path: '**',  redirectTo: ''}
];
