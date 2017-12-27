import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {errorRoute} from './layouts';
import {ROUTES} from "./stip/app.routes";


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
