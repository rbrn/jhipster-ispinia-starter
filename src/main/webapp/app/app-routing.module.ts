import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {errorRoute} from './layouts';
import {STIP_LAYOUT_ROUTES} from './stip/app.routes';

const LAYOUT_ROUTES = [
    ...STIP_LAYOUT_ROUTES,
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
