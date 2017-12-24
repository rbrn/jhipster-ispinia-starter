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
var state_storage_service_1 = require("../../../../main/webapp/app/shared/auth/state-storage.service");
var MockStateStorageService = (function (_super) {
    __extends(MockStateStorageService, _super);
    function MockStateStorageService() {
        var _this = _super.call(this, state_storage_service_1.StateStorageService) || this;
        _this.setUrlSpy({});
        _this.storeUrlSpy = _this.spy('storeUrl').andReturn(_this);
        return _this;
    }
    MockStateStorageService.prototype.setUrlSpy = function (json) {
        this.getUrlSpy = this.spy('getUrl').andReturn(json);
    };
    MockStateStorageService.prototype.setResponse = function (json) {
        this.setUrlSpy(json);
    };
    return MockStateStorageService;
}(spyobject_1.SpyObject));
exports.MockStateStorageService = MockStateStorageService;
//# sourceMappingURL=mock-state-storage.service.js.map