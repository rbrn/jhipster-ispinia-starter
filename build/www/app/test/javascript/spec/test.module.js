"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng_jhipster_1 = require("ng-jhipster");
var mock_language_service_1 = require("./helpers/mock-language.service");
var shared_1 = require("../../../main/webapp/app/shared");
var mock_principal_service_1 = require("./helpers/mock-principal.service");
var mock_account_service_1 = require("./helpers/mock-account.service");
var mock_route_service_1 = require("./helpers/mock-route.service");
var mock_active_modal_service_1 = require("./helpers/mock-active-modal.service");
var mock_event_manager_service_1 = require("./helpers/mock-event-manager.service");
var StipTestModule = (function () {
    function StipTestModule() {
    }
    StipTestModule = __decorate([
        core_1.NgModule({
            providers: [
                common_1.DatePipe,
                ng_jhipster_1.JhiDataUtils,
                ng_jhipster_1.JhiDateUtils,
                ng_jhipster_1.JhiParseLinks,
                testing_1.MockBackend,
                http_1.BaseRequestOptions,
                {
                    provide: ng_jhipster_1.JhiLanguageService,
                    useClass: mock_language_service_1.MockLanguageService
                },
                {
                    provide: shared_1.JhiLanguageHelper,
                    useClass: mock_language_service_1.MockLanguageHelper
                },
                {
                    provide: ng_jhipster_1.JhiEventManager,
                    useClass: mock_event_manager_service_1.MockEventManager
                },
                {
                    provide: ng_bootstrap_1.NgbActiveModal,
                    useClass: mock_active_modal_service_1.MockActiveModal
                },
                {
                    provide: router_1.ActivatedRoute,
                    useValue: new mock_route_service_1.MockActivatedRoute({ id: '123' })
                },
                {
                    provide: router_1.Router,
                    useClass: mock_route_service_1.MockRouter
                },
                {
                    provide: shared_1.Principal,
                    useClass: mock_principal_service_1.MockPrincipal
                },
                {
                    provide: shared_1.AccountService,
                    useClass: mock_account_service_1.MockAccountService
                },
                {
                    provide: shared_1.LoginModalService,
                    useValue: null
                },
                {
                    provide: core_1.ElementRef,
                    useValue: null
                },
                {
                    provide: core_1.Renderer,
                    useValue: null
                },
                {
                    provide: ng_jhipster_1.JhiAlertService,
                    useValue: null
                },
                {
                    provide: ng_bootstrap_1.NgbModal,
                    useValue: null
                },
                {
                    provide: http_1.Http,
                    useFactory: function (backendInstance, defaultOptions) {
                        return new http_1.Http(backendInstance, defaultOptions);
                    },
                    deps: [testing_1.MockBackend, http_1.BaseRequestOptions]
                }
            ]
        })
    ], StipTestModule);
    return StipTestModule;
}());
exports.StipTestModule = StipTestModule;
//# sourceMappingURL=test.module.js.map