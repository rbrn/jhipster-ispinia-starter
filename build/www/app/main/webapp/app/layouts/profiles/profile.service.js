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
var http_1 = require("@angular/http");
var app_constants_1 = require("../../app.constants");
var profile_info_model_1 = require("./profile-info.model");
var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
        this.profileInfoUrl = app_constants_1.SERVER_API_URL + 'api/profile-info';
    }
    ProfileService.prototype.getProfileInfo = function () {
        if (!this.profileInfo) {
            this.profileInfo = this.http.get(this.profileInfoUrl)
                .map(function (res) {
                var data = res.json();
                var pi = new profile_info_model_1.ProfileInfo();
                pi.activeProfiles = data.activeProfiles;
                pi.ribbonEnv = data.ribbonEnv;
                pi.inProduction = data.activeProfiles.includes('prod');
                pi.swaggerEnabled = data.activeProfiles.includes('swagger');
                return pi;
            }).toPromise();
        }
        return this.profileInfo;
    };
    ProfileService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map