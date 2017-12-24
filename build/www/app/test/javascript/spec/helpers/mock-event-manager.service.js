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
var ng_jhipster_1 = require("ng-jhipster");
var MockEventManager = (function (_super) {
    __extends(MockEventManager, _super);
    function MockEventManager() {
        var _this = _super.call(this, ng_jhipster_1.JhiEventManager) || this;
        _this.broadcastSpy = _this.spy('broadcast').andReturn(_this);
        return _this;
    }
    return MockEventManager;
}(spyobject_1.SpyObject));
exports.MockEventManager = MockEventManager;
//# sourceMappingURL=mock-event-manager.service.js.map