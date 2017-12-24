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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var spyobject_1 = require("./spyobject");
var rxjs_1 = require("rxjs");
var MockActivatedRoute = (function (_super) {
    __extends(MockActivatedRoute, _super);
    function MockActivatedRoute(parameters) {
        var _this = _super.call(this) || this;
        _this.queryParams = rxjs_1.Observable.of(parameters);
        _this.params = rxjs_1.Observable.of(parameters);
        _this.data = rxjs_1.Observable.of(__assign({}, parameters, { pagingParams: {
                page: 10,
                ascending: false,
                predicate: 'id'
            } }));
        return _this;
    }
    return MockActivatedRoute;
}(router_1.ActivatedRoute));
exports.MockActivatedRoute = MockActivatedRoute;
var MockRouter = (function (_super) {
    __extends(MockRouter, _super);
    function MockRouter() {
        var _this = _super.call(this, router_1.Router) || this;
        _this.navigateSpy = _this.spy('navigate');
        return _this;
    }
    return MockRouter;
}(spyobject_1.SpyObject));
exports.MockRouter = MockRouter;
//# sourceMappingURL=mock-route.service.js.map