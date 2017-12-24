"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var en_1 = require("@angular/common/locales/en");
var _1 = require("./");
var StipSharedCommonModule = (function () {
    function StipSharedCommonModule() {
        common_1.registerLocaleData(en_1.default);
    }
    StipSharedCommonModule = __decorate([
        core_1.NgModule({
            imports: [
                _1.StipSharedLibsModule
            ],
            declarations: [
                _1.FindLanguageFromKeyPipe,
                _1.JhiAlertComponent,
                _1.JhiAlertErrorComponent
            ],
            providers: [
                _1.JhiLanguageHelper,
                platform_browser_1.Title,
                {
                    provide: core_1.LOCALE_ID,
                    useValue: 'en'
                },
            ],
            exports: [
                _1.StipSharedLibsModule,
                _1.FindLanguageFromKeyPipe,
                _1.JhiAlertComponent,
                _1.JhiAlertErrorComponent
            ]
        }),
        __metadata("design:paramtypes", [])
    ], StipSharedCommonModule);
    return StipSharedCommonModule;
}());
exports.StipSharedCommonModule = StipSharedCommonModule;
//# sourceMappingURL=shared-common.module.js.map