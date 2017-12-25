import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { errorRoute } from './layouts';
import {BasicLayoutComponent} from "./stip/layouts/basicLayout.component";
import {StarterViewComponent} from "./stip/appviews/starterview.component";

 const ROUTES: Routes = [
    // Main redirect
    {path: '', redirectTo: 'starterview', pathMatch: 'full'},
    {
        path: '', component: BasicLayoutComponent,
        children: [
            {path: 'starterview', component: StarterViewComponent}
        ]
    }
];

const LAYOUT_ROUTES = [
    ...ROUTES,
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class StipAppRoutingModule {}
