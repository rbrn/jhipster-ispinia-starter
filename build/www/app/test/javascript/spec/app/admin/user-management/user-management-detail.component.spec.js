"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var test_module_1 = require("../../../test.module");
var mock_route_service_1 = require("../../../helpers/mock-route.service");
var user_management_detail_component_1 = require("../../../../../../main/webapp/app/admin/user-management/user-management-detail.component");
var shared_1 = require("../../../../../../main/webapp/app/shared");
describe('Component Tests', function () {
    describe('User Management Detail Component', function () {
        var comp;
        var fixture;
        var service;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.StipTestModule],
                declarations: [user_management_detail_component_1.UserMgmtDetailComponent],
                providers: [
                    {
                        provide: router_1.ActivatedRoute,
                        useValue: new mock_route_service_1.MockActivatedRoute({ login: 'user' })
                    },
                    shared_1.UserService
                ]
            })
                .overrideTemplate(user_management_detail_component_1.UserMgmtDetailComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(user_management_detail_component_1.UserMgmtDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(shared_1.UserService);
        });
        describe('OnInit', function () {
            it('Should call load all on init', function () {
                // GIVEN
                spyOn(service, 'find').and.returnValue(Rx_1.Observable.of(new shared_1.User(1, 'user', 'first', 'last', 'first@last.com', true, 'en', ['ROLE_USER'], 'admin', null, null, null)));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.find).toHaveBeenCalledWith('user');
                expect(comp.user).toEqual(jasmine.objectContaining({
                    id: 1,
                    login: 'user',
                    firstName: 'first',
                    lastName: 'last',
                    email: 'first@last.com',
                    activated: true,
                    langKey: 'en',
                    authorities: ['ROLE_USER'],
                    createdBy: 'admin',
                    createdDate: null,
                    lastModifiedBy: null,
                    lastModifiedDate: null,
                    password: null
                }));
            });
        });
    });
});
//# sourceMappingURL=user-management-detail.component.spec.js.map