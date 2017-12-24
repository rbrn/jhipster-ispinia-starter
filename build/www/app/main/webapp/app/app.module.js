"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./vendor.ts");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ngx_webstorage_1 = require("ngx-webstorage");
var shared_1 = require("./shared");
var app_routing_module_1 = require("./app-routing.module");
var home_module_1 = require("./home/home.module");
var admin_module_1 = require("./admin/admin.module");
var account_module_1 = require("./account/account.module");
var entity_module_1 = require("./entities/entity.module");
var http_provider_1 = require("./blocks/interceptor/http.provider");
var uib_pagination_config_1 = require("./blocks/config/uib-pagination.config");
var stip_footer_component_1 = require("./stip/layouts/stip.footer.component");
// jhipster-needle-angular-add-module-import JHipster will add new module here
var layouts_1 = require("./layouts");
var stip_topnavbar_component_1 = require("./stip/topnavbar/stip.topnavbar.component");
var stip_navigation_component_1 = require("./stip/navigation/stip.navigation.component");
var StipAppModule = (function () {
    function StipAppModule() {
    }
    StipAppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.StipAppRoutingModule,
                ngx_webstorage_1.Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
                shared_1.StipSharedModule,
                home_module_1.StipHomeModule,
                admin_module_1.StipAdminModule,
                account_module_1.StipAccountModule,
                entity_module_1.StipEntityModule,
            ],
            declarations: [
                layouts_1.JhiMainComponent,
                layouts_1.NavbarComponent,
                layouts_1.ErrorComponent,
                layouts_1.PageRibbonComponent,
                layouts_1.ActiveMenuDirective,
                //FooterComponent,
                stip_topnavbar_component_1.StipTopNavbarComponent,
                stip_navigation_component_1.StipNavigationComponent,
                stip_footer_component_1.StipFooterComponent
            ],
            providers: [
                layouts_1.ProfileService,
                http_provider_1.customHttpProvider(),
                uib_pagination_config_1.PaginationConfig,
                shared_1.UserRouteAccessService
            ],
            bootstrap: [layouts_1.JhiMainComponent]
        })
    ], StipAppModule);
    return StipAppModule;
}());
exports.StipAppModule = StipAppModule;
//# sourceMappingURL=app.module.js.map