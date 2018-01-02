import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {errorRoute} from './layouts';
import {STIP_LAYOUT_ROUTES} from './stip/stip.app.routes';
import {StipSharedModule} from './shared';

const LAYOUT_ROUTES = [
    ...STIP_LAYOUT_ROUTES,
    ...errorRoute
];

@NgModule({
    imports: [
        StipSharedModule,
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StipAppRoutingModule {}
