import './vendor.ts';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2Webstorage} from 'ngx-webstorage';

import {StipSharedModule, UserRouteAccessService} from './shared';
import {StipAppRoutingModule} from './app-routing.module';
import {StipHomeModule} from './home/home.module';
import {StipEntityModule} from './entities/entity.module';
import {customHttpProvider} from './blocks/interceptor/http.provider';
import {PaginationConfig} from './blocks/config/uib-pagination.config';
import {ErrorComponent, JhiMainComponent, PageRibbonComponent, ProfileService,} from './layouts';
import {StipLayoutsModule} from './stip/stip.layouts.module';

// jhipster-needle-angular-add-module-import JHipster will add new module here

@NgModule({
    imports: [
        BrowserModule,
        StipAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        StipSharedModule,
        StipHomeModule,
        StipEntityModule,
        StipLayoutsModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        ErrorComponent,
        PageRibbonComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class StipAppModule {}
