"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var Rx_1 = require("rxjs/Rx");
var ng_jhipster_1 = require("ng-jhipster");
var test_module_1 = require("../../../test.module");
var user_management_dialog_component_1 = require("../../../../../../main/webapp/app/admin/user-management/user-management-dialog.component");
var shared_1 = require("../../../../../../main/webapp/app/shared");
describe('Component Tests', function () {
    describe('User Management Dialog Component', function () {
        var comp;
        var fixture;
        var service;
        var mockEventManager;
        var mockActiveModal;
        var mockLanguageHelper;
        beforeEach(testing_1.async(function () {
            testing_1.TestBed.configureTestingModule({
                imports: [test_module_1.StipTestModule],
                declarations: [user_management_dialog_component_1.UserMgmtDialogComponent],
                providers: [
                    shared_1.UserService
                ]
            })
                .overrideTemplate(user_management_dialog_component_1.UserMgmtDialogComponent, '')
                .compileComponents();
        }));
        beforeEach(function () {
            fixture = testing_1.TestBed.createComponent(user_management_dialog_component_1.UserMgmtDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(shared_1.UserService);
            mockEventManager = fixture.debugElement.injector.get(ng_jhipster_1.JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(ng_bootstrap_1.NgbActiveModal);
            mockLanguageHelper = fixture.debugElement.injector.get(shared_1.JhiLanguageHelper);
        });
        describe('OnInit', function () {
            it('Should load authorities and language on init', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                spyOn(service, 'authorities').and.returnValue(Rx_1.Observable.of(['USER']));
                // WHEN
                comp.ngOnInit();
                // THEN
                expect(service.authorities).toHaveBeenCalled();
                expect(comp.authorities).toEqual(['USER']);
                expect(mockLanguageHelper.getAllSpy).toHaveBeenCalled();
            })));
        });
        describe('save', function () {
            it('Should call update service on save for existing user', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new shared_1.User('123');
                spyOn(service, 'update').and.returnValue(Rx_1.Observable.of(entity));
                comp.user = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.update).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
                expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'userListModification', content: 'OK' });
                expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
            })));
            it('Should call create service on save for new user', testing_1.inject([], testing_1.fakeAsync(function () {
                // GIVEN
                var entity = new shared_1.User();
                spyOn(service, 'create').and.returnValue(Rx_1.Observable.of(entity));
                comp.user = entity;
                // WHEN
                comp.save();
                testing_1.tick(); // simulate async
                // THEN
                expect(service.create).toHaveBeenCalledWith(entity);
                expect(comp.isSaving).toEqual(false);
                expect(mockEventManager.broadcastSpy).toHaveBeenCalledWith({ name: 'userListModification', content: 'OK' });
                expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
            })));
        });
    });
});
//# sourceMappingURL=user-management-dialog.component.spec.js.map