"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var Rx_1 = require("rxjs/Rx");
var ng_jhipster_1 = require("ng-jhipster");
var test_module_1 = require("../../../test.module");
var user_management_delete_dialog_component_1 = require("../../../../../../main/webapp/app/admin/user-management/user-management-delete-dialog.component");
var shared_1 = require("../../../../../../main/webapp/app/shared");
describe('Component Tests', function () {
    describe('User Management Delete Component', function () {
        var comp;
        var fixture;
        var service;
        var mockEventManager;
        var mockActiveModal;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.StipTestModule],
                declarations: [user_management_delete_dialog_component_1.UserMgmtDeleteDialogComponent],
                providers: [
                    shared_1.UserService
                ]
            })
                .overrideTemplate(user_management_delete_dialog_component_1.UserMgmtDeleteDialogComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(user_management_delete_dialog_component_1.UserMgmtDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(shared_1.UserService);
            mockEventManager = fixture.debugElement.injector.get(ng_jhipster_1.JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(ng_bootstrap_1.NgbActiveModal);
        });
        describe('confirmDelete', function () {
            it('Should call delete service on confirmDelete', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                spyOn(service, 'delete').and.returnValue(Rx_1.Observable.of({}));
                // WHEN
                comp.confirmDelete('user');
                testing_1.tick();
                // THEN
                expect(service.delete).toHaveBeenCalledWith('user');
                expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
            })));
        });
    });
});
//# sourceMappingURL=user-management-delete-dialog.component.spec.js.map