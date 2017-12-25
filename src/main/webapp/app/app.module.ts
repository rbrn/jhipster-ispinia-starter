import './vendor.ts';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2Webstorage} from 'ngx-webstorage';

import {StipSharedModule, UserRouteAccessService} from './shared';
import {StipAppRoutingModule} from './app-routing.module';
import {StipHomeModule} from './home/home.module';
import {StipAdminModule} from './admin/admin.module';
import {StipAccountModule} from './account/account.module';
import {StipEntityModule} from './entities/entity.module';
import {customHttpProvider} from './blocks/interceptor/http.provider';
import {PaginationConfig} from './blocks/config/uib-pagination.config';
import {StipFooterComponent} from './stip/layouts/stip.footer.component';
import {ErrorComponent, JhiMainComponent, PageRibbonComponent, ProfileService,} from './layouts';
import {StipTopNavbarComponent} from './stip/topnavbar/stip.topnavbar.component';
import {StipNavigationComponent} from './stip/navigation/stip.navigation.component';
import {StipTopnavigationnavbarComponent} from "./stip/topnavbar/stip.topnavigationnavbar.component";
import {BasicLayoutComponent} from "./stip/layouts/basicLayout.component";
import {StarterViewComponent} from "./stip/appviews/starterview.component";
import {BsDropdownModule} from "ngx-bootstrap";

// jhipster-needle-angular-add-module-import JHipster will add new module here

@NgModule({
    imports: [
        BrowserModule,
        StipAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        StipSharedModule,
        StipHomeModule,
        StipAdminModule,
        StipAccountModule,
        StipEntityModule,
        BsDropdownModule.forRoot()
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        ErrorComponent,
        PageRibbonComponent,
        StipTopNavbarComponent,
        StipNavigationComponent,
        StipFooterComponent,
        StipTopnavigationnavbarComponent,
        BasicLayoutComponent, StarterViewComponent
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
