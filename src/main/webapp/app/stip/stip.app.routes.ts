import {Routes} from '@angular/router';
import {StipStarterViewComponent} from './appviews/stip.starterview.component';
import {StipDashboard1Component} from './appviews/stip.dashboard1.component';
import {StipBasicLayoutComponent} from './layouts/stip.basicLayout.component';

export const STIP_LAYOUT_ROUTES: Routes = [
    // Main redirect
    // App views
    {
        path: 'dashboards', component: StipBasicLayoutComponent,
        children: [
            {path: 'dashboard1', component: StipDashboard1Component},
        ],
        data: {
            authorities: [],
            pageTitle: 'home.title'
        }
    },

    {path: '', redirectTo: 'main', pathMatch: 'full',
        data: {
            authorities: [],
            pageTitle: 'home.title'
        }
    },
    {
        path: 'main', component: StipBasicLayoutComponent,
        children: [
            {path: '', component: StipStarterViewComponent}
        ],
        data: {
            authorities: [],
            pageTitle: 'home.title'
        }
    }
];
