"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var ng_jhipster_1 = require("ng-jhipster");
var shared_1 = require("./../../../../../../main/webapp/app/shared");
var app_constants_1 = require("./../../../../../../main/webapp/app/app.constants");
describe('Service Tests', function () {
    describe('User Service', function () {
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                providers: [
                    {
                        provide: http_1.ConnectionBackend,
                        useClass: testing_2.MockBackend
                    },
                    {
                        provide: http_1.RequestOptions,
                        useClass: http_1.BaseRequestOptions
                    },
                    http_1.Http,
                    ng_jhipster_1.JhiDateUtils,
                    shared_1.UserService
                ]
            });
            service = testing_1.TestBed.get(shared_1.UserService);
            _this.backend = testing_1.TestBed.get(http_1.ConnectionBackend);
            _this.backend.connections.subscribe(function (connection) {
                _this.lastConnection = connection;
            });
        }));
        describe('Service methods', function () {
            it('should call correct URL', function () {
                service.find('user').subscribe(function () { });
                var resourceUrl = app_constants_1.SERVER_API_URL + 'api/users';
                expect(_this.lastConnection).toBeDefined();
                expect(_this.lastConnection.request.url).toEqual(resourceUrl + "/user");
            });
            it('should return User', function () {
                var entity;
                service.find('user').subscribe(function (_entity) {
                    entity = _entity;
                });
                _this.lastConnection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify(new shared_1.User(1, 'user')),
                })));
                expect(entity).toBeDefined();
                expect(entity.login).toEqual('user');
            });
            it('should return Authorities', function () {
                var authorities;
                service.authorities().subscribe(function (_authorities) {
                    authorities = _authorities;
                });
                _this.lastConnection.mockRespond(new http_1.Response(new http_1.ResponseOptions({
                    body: JSON.stringify(['ROLE_USER', 'ROLE_ADMIN']),
                })));
                expect(authorities).toBeDefined();
                expect(authorities).toEqual(['ROLE_USER', 'ROLE_ADMIN']);
            });
            it('should propagate not found response', function () {
                var error;
                service.find('user').subscribe(null, function (_error) {
                    error = _error;
                });
                _this.lastConnection.mockError(new http_1.Response(new http_1.ResponseOptions({
                    status: 404,
                })));
                expect(error).toBeDefined();
                expect(error.status).toEqual(404);
            });
        });
    });
});
//# sourceMappingURL=user.service.spec.js.map