"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basicLayout_component_1 = require("./layouts/basicLayout.component");
var topNavigationLayout_component_1 = require("./layouts/topNavigationLayout.component");
var starterview_component_1 = require("./appviews/starterview.component");
var blankLayout_component_1 = require("./layouts/blankLayout.component");
var login_component_1 = require("./appviews/login.component");
exports.ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'dashboards', pathMatch: 'full' },
    // App views
    {
        path: 'dashboards', component: basicLayout_component_1.BasicLayoutComponent
    },
    {
        path: 'dashboards', component: topNavigationLayout_component_1.TopNavigationLayoutComponent
    },
    {
        path: '', component: basicLayout_component_1.BasicLayoutComponent,
        children: [
            { path: 'starterview', component: starterview_component_1.StarterViewComponent }
        ]
    },
    {
        path: '', component: blankLayout_component_1.BlankLayoutComponent,
        children: [
            { path: 'login', component: login_component_1.LoginComponent },
        ]
    },
    // Handle all other routes
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map