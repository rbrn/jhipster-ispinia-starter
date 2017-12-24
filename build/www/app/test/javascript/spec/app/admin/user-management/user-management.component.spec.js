"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var test_module_1 = require("../../../test.module");
var shared_1 = require("../../../../../../main/webapp/app/shared");
var user_management_component_1 = require("../../../../../../main/webapp/app/admin/user-management/user-management.component");
var shared_2 = require("../../../../../../main/webapp/app/shared");
describe('Component Tests', function () {
    describe('User Management Component', function () {
        var comp;
        var fixture;
        var service;
        var mockPrincipal;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.StipTestModule],
                declarations: [user_management_component_1.UserMgmtComponent],
                providers: [
                    shared_2.UserService
                ]
            })
                .overrideTemplate(user_management_component_1.UserMgmtComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(user_management_component_1.UserMgmtComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(shared_2.UserService);
            mockPrincipal = fixture.debugElement.injector.get(shared_1.Principal);
        });
        describe('OnInit', function () {
            it('Should call load all on init', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                var headers = new http_1.Headers();
                headers.append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Rx_1.Observable.of({
                    json: [new shared_2.User('123')],
                    headers: headers
                }));
                // WHEN
                comp.ngOnInit();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.users[0]).toEqual(jasmine.objectContaining({ id: '123' }));
            })));
        });
        describe('setActive', function () {
            it('Should update user and call load all', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                var headers = new http_1.Headers();
                headers.append('link', 'link;link');
                var user = new shared_2.User('123');
                spyOn(service, 'query').and.returnValue(Rx_1.Observable.of({
                    json: [user],
                    headers: headers
                }));
                spyOn(service, 'update').and.returnValue(Rx_1.Observable.of({ status: 200 }));
                // WHEN
                comp.setActive(user, true);
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(user);
                expect(service.query).toHaveBeenCalled();
                expect(comp.users[0]).toEqual(jasmine.objectContaining({ id: '123' }));
            })));
        });
    });
});
//# sourceMappingURL=user-management.component.spec.js.map