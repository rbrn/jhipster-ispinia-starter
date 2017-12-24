"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var spyobject_1 = require("./spyobject");
var login_service_1 = require("../../../../main/webapp/app/shared/login/login.service");
var MockLoginService = (function (_super) {
    __extends(MockLoginService, _super);
    function MockLoginService() {
        var _this = _super.call(this, login_service_1.LoginService) || this;
        _this.setLoginSpy({});
        _this.logoutSpy = _this.spy('logout').andReturn(_this);
        _this.registerSpy = _this.spy('register').andReturn(_this);
        _this.requestResetPasswordSpy = _this.spy('requestResetPassword').andReturn(_this);
        _this.cancelSpy = _this.spy('cancel').andReturn(_this);
        return _this;
    }
    MockLoginService.prototype.setLoginSpy = function (json) {
        this.loginSpy = this.spy('login').andReturn(Promise.resolve(json));
    };
    MockLoginService.prototype.setResponse = function (json) {
        this.setLoginSpy(json);
    };
    return MockLoginService;
}(spyobject_1.SpyObject));
exports.MockLoginService = MockLoginService;
//# sourceMappingURL=mock-login.service.js.map