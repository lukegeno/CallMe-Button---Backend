webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = "img {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    height: 12vh;\r\n    width: auto;\r\n}\r\n\r\nh2, p {\r\n    text-align: center;\r\n}\r\n\r\nh2 {\r\n    margin-bottom: 1em;\r\n    margin-top: 1em;\r\n}"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n            <h2>CallMe Click Button</h2>\n            <p>Our service is powered by United World Telecom, a reliable US-based service provider since 1996.</p>\n            <p>CallMeButton.co was created at IronHack Paris in 2018.</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n            <img class=\"img-fluid\" src=\"https://assets5.domestika.org/job-covers/000/042/275/42275-original.png?1470139349\" alt=\"IronHack\" />\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n            <img class=\"img-fluid\" src=\"https://cdn.uwtcallback.com/imgs/lg-uwt.png\" alt=\"UWT Callback\" />\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/api/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserService; });
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignupCredentials; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(ajaxTruc) {
        this.ajaxTruc = ajaxTruc;
    }
    //checkLogin
    UserService.prototype.check = function () {
        var _this = this;
        return this.ajaxTruc
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/checkLogin", { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    //signup
    UserService.prototype.postSignup = function (creds) {
        var _this = this;
        return this.ajaxTruc
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/signup", creds, { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    //login
    UserService.prototype.postLogin = function (creds) {
        var _this = this;
        return this.ajaxTruc
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/login", creds, { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    //logout
    UserService.prototype.logout = function () {
        var _this = this;
        return this.ajaxTruc
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/logout", { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var LoginCredentials = /** @class */ (function () {
    function LoginCredentials() {
    }
    return LoginCredentials;
}());

var SignupCredentials = /** @class */ (function () {
    function SignupCredentials() {
    }
    return SignupCredentials;
}());



/***/ }),

/***/ "./src/app/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plans_plans_component__ = __webpack_require__("./src/app/plans/plans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logged_in_logged_in_component__ = __webpack_require__("./src/app/logged-in/logged-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__features_features_component__ = __webpack_require__("./src/app/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__how_it_works_how_it_works_component__ = __webpack_require__("./src/app/how-it-works/how-it-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__request_signup_request_signup_component__ = __webpack_require__("./src/app/request-signup/request-signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    { path: 'plans', component: __WEBPACK_IMPORTED_MODULE_4__plans_plans_component__["a" /* PlansComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_7__logged_in_logged_in_component__["a" /* LoggedInComponent */] },
    { path: 'features', component: __WEBPACK_IMPORTED_MODULE_8__features_features_component__["a" /* FeaturesComponent */] },
    { path: 'how-it-works', component: __WEBPACK_IMPORTED_MODULE_9__how_it_works_how_it_works_component__["a" /* HowItWorksComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_11__request_signup_request_signup_component__["a" /* RequestSignupComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "    footer {\r\n        text-align: center;\r\n        background-color: lightgrey;\r\n        position: fixed;\r\n    }    \r\n    \r\n    .sign-up {\r\n        color: white;\r\n        background-color: orange;\r\n        border: 1px solid orange;\r\n        padding-left: 1.5vw;\r\n        padding-right: 1.5vw;\r\n    }    \r\n    \r\n    .log-in {\r\n        color: orange;\r\n        background-color: lightgray;\r\n        border: 1px solid lightgray;\r\n        padding-left: 2vw;\r\n        padding-right: 2vw;\r\n    }    \r\n    \r\n    .one {\r\n        margin-right: 5.5vw;\r\n        margin-top: 3.5vh;    \r\n    }    \r\n    \r\n    .one a {\r\n        color: black;\r\n    }    \r\n    \r\n    .button-jawns {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        margin-left: none;\r\n        margin-top: 1vh;\r\n        margin-right: .5vw;\r\n    }    \r\n    \r\n    .nav-link {\r\n        padding: 0;\r\n    }    \r\n    \r\n    .two {\r\n        margin-right: 2vw;\r\n        margin-left: 0;\r\n        display: inline-block;\r\n    }    \r\n    \r\n    @media (min-width: 991px) and (max-width: 1800px) {\r\n\r\n    .navbar {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n    }\r\n\r\n    .navbar-collapse {\r\n        -webkit-box-flex: unset;\r\n            -ms-flex-positive: unset;\r\n                flex-grow: unset;\r\n    }\r\n   \r\n    .navbar {\r\n        height: 25vh;\r\n    }\r\n}    \r\n    \r\n    @media (max-width: 991px) {\r\n\r\n    .navbar-btn {\r\n        width: 88vw;\r\n    }\r\n\r\n    li {\r\n        text-align: center;\r\n    }\r\n\r\n    a {\r\n        text-align: center;\r\n    }\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-none\">\n    <a class=\"navbar-brand\" routerLink=\"/\"><img class=\"img-fluid\" src=\"https://image.ibb.co/jUYAoy/logo.png\" alt=\"Logo\" /></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\" align=\"center\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n      <div class=\"navbar-nav\">\n        <li class=\"nav-item one\">\n          <a class=\"nav-link\" routerLink=\"/features\"><b>Features</b></a>\n        </li>\n        <li class=\"nav-item one\">\n          <a class=\"nav-link\" routerLink=\"/plans\"><b>Plans</b></a>\n        </li>\n        <li class=\"nav-item dropdown one\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              <b>About</b>\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <a class=\"dropdown-item\" routerLink=\"/how-it-works\">How it works</a>\n              <a class=\"dropdown-item\" routerLink=\"/about\">About us</a>\n            </div>\n          </li>\n        <span class=\"button-jawns\" *ngIf=\"!userTruc.currentUser\">\n          <li class=\"nav-item two\">\n            <a class=\"nav-link\" routerLink=\"/login\"><button class=\"btn navbar-btn log-in\"><b>Log in</b></button></a>\n          </li>\n          <li class =\"nav-item two\">\n            <a class=\"nav-link\" routerLink=\"/signup\"><button class=\"btn navbar-btn sign-up\"><b>Sign up</b></button></a>\n          </li>\n        </span>\n\n        <span class=\"button-jawns\" *ngIf=\"userTruc.currentUser\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"><button class=\"btn navbar-btn sign-up\" (click)=\"logoutClick()\"><b>Log out</b></button></a>\n          </li>\n        </span>\n      </div>\n    </div>\n</nav>\n</header>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(userTruc) {
        this.userTruc = userTruc;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        //check if visitor is logged in immediately
        this.userTruc.check()
            .catch(function (err) {
            console.log("App login check error");
            console.log(err);
        });
    };
    AppComponent.prototype.logoutClick = function () {
        this.userTruc.logout()
            .catch(function (err) {
            console.log("LOGOUT error");
            console.log(err);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_user_service__["c" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_router_module__ = __webpack_require__("./src/app/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_page_landing_page_component__ = __webpack_require__("./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plans_plans_component__ = __webpack_require__("./src/app/plans/plans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__logged_in_logged_in_component__ = __webpack_require__("./src/app/logged-in/logged-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__how_it_works_how_it_works_component__ = __webpack_require__("./src/app/how-it-works/how-it-works.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__features_features_component__ = __webpack_require__("./src/app/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__request_signup_request_signup_component__ = __webpack_require__("./src/app/request-signup/request-signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__plans_plans_component__["a" /* PlansComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__logged_in_logged_in_component__["a" /* LoggedInComponent */],
                __WEBPACK_IMPORTED_MODULE_13__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__how_it_works_how_it_works_component__["a" /* HowItWorksComponent */],
                __WEBPACK_IMPORTED_MODULE_15__features_features_component__["a" /* FeaturesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__request_signup_request_signup_component__["a" /* RequestSignupComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_router_module__["a" /* AppRouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__api_user_service__["c" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/features.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-top: 1em;\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\nimg {\r\n    height: 10vh;\r\n    width: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    margin-bottom: 3vh;\r\n}"

/***/ }),

/***/ "./src/app/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n                <h2>Features</h2>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12\">\r\n                <img class=\"img-fluid\" src=\"https://orig00.deviantart.net/4c1b/f/2009/060/d/f/round_glossy_green_button_by_fbouly.png\" alt=\"phone icon\" />\r\n                <p>Customizable button (Utilize your own HTML element or create one with our Button Wizard)</p>\r\n            </div>\r\n            <br />\r\n            <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12\">\r\n                <img class=\"img-fluid\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yin_yang.svg/1200px-Yin_yang.svg.png\" alt=\"YinYang\" />\r\n                <p>Black and white lists (Filter by country)</p>\r\n            </div>\r\n            <br />\r\n            <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12\">\r\n                <img class=\"img-fluid\" src=\"https://png.icons8.com/metro/1600/overtime.png\" alt=\"schedule\" />\r\n                <p>Custom scheduling (Define the office hours when you want to receive calls)</p>\r\n            </div>\r\n            <br />\r\n            <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12\">\r\n                <img class=\"img-fluid\" src=\"http://www.foxbuff.com/wp-content/uploads/2017/05/google-analytics-logo-770x515.png\" alt=\"Google Analytics\" />\r\n                <p>Google Analytics tracker and integrateable with your CRM</p>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-features',
            template: __webpack_require__("./src/app/features/features.component.html"),
            styles: [__webpack_require__("./src/app/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/how-it-works/how-it-works.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\r\n    text-align: center;\r\n    margin-top: 1em;\r\n    margin-bottom: 1.5em;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n    margin-bottom: 5vh;\r\n}\r\n\r\nimg {\r\n    height: 10vh;\r\n    width: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    margin-bottom: 3vh;\r\n}"

/***/ }),

/***/ "./src/app/how-it-works/how-it-works.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n            <h2>How it works</h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12\">\n            <img class=\"img-fluid\" src=\"https://uploads.getpop.org/wp-content/uploads/2017/07/code2.png\" alt=\"code\" />\n            <p>1. We provide a customizable HTML snippet that can be inserted into your website.</p>\n        </div>\n        <br />\n        <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12\">\n            <img class=\"img-fluid\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN5WwVBrV2f6QY4Mqf78NMkuj1hOtobbIfe3oX0j15QK6fANkj\" alt=\"code\" />\n            <p>2. Visitors click the CallMe Button to request a free phone call.</p>\n        </div>\n        <br />\n        <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12\">\n            <img class=\"img-fluid\" src=\"http://cdn.onlinewebfonts.com/svg/img_407072.png\" alt=\"code\" />\n            <p>3. Our service calls the customer, then rings one of your representatives in under 30 seconds.</p>\n        </div>\n        <br />\n        <div class=\"col-xl-3 col-lg-6 col-md-12 col-sm-12\">\n            <img class=\"img-fluid\" src=\"http://www.stickpng.com/assets/images/580b585b2edbce24c47b2876.png\" alt=\"code\" />\n            <p>4. Your sales rep is able to engage the website visitor and close the deal.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/how-it-works/how-it-works.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-how-it-works',
            template: __webpack_require__("./src/app/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__("./src/app/how-it-works/how-it-works.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n\r\n.btn {\r\n    background-color: orange;\r\n    color: white;\r\n    border: 0;\r\n    border-radius: 10px;\r\n    padding-left: 3.5vw;\r\n    padding-right: 3.5vw;\r\n    padding-top: 2vh;\r\n    padding-bottom: 2vh;\r\n    margin-bottom: 3vh;\r\n}\r\n\r\nh3 {\r\n    margin-bottom: 2vh;\r\n}\r\n\r\n@media (min-width: 991px) and (max-width: 1800px) {\r\n\r\n    .container {\r\n        margin-top: 12vh;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 991px) {\r\n\r\n\r\n    \r\n}\r\n\r\n/* @media (max-width: 800px) {\r\n    \r\n    .container {\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n    .button-demo {\r\n        margin-top: 2em;\r\n        margin-bottom: 2em;\r\n    }\r\n    \r\n    h3 {\r\n        font-size: 1.5em;\r\n        margin-top: 2vh;\r\n        margin-bottom: 2.5vh;\r\n    }\r\n\r\n    p {\r\n        font-size: 1em;\r\n        text-align: left;\r\n        margin-top: 1em;\r\n        margin-bottom: 1em;\r\n    }\r\n\r\n    .btn-primary {\r\n        padding: 1.5em;\r\n        background-color: orange;\r\n        border: none;\r\n        border-radius: 10px;\r\n        align-content: center;\r\n    }\r\n    \r\n    }\r\n\r\n\r\n\r\n@media (min-width: 800px) and (max-width: 1800px) {\r\n\r\n\r\n    h3 {\r\n        margin-top: .5em;\r\n    }\r\n    \r\n    .col-lg-6 {\r\n        margin-top: 0 auto;\r\n    }\r\n    \r\n    .button-demo {\r\n        margin-top: 2em;\r\n        margin-bottom: 2em;\r\n    }\r\n\r\n    .btn {\r\n        background-color: orange;\r\n        border: 1px solid orange;\r\n        height: 10vh;\r\n        width: 20vw;\r\n    }\r\n    \r\n\r\n}\r\n\r\n */\r\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 sales-copy\">\n            <h3>Convert website visitors into phone leads</h3>\n            <p>Allow customers and prospects to request a free telephone call by clicking a button on your website!</p>\n            <div class=\"button-demo\" align=\"center\">\n            <a routerLink=\"/signup\" ><button type=\"button\" class=\"btn btn-primary\"><b>Request a demo</b></button></a>\n            </div>\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12 image\" align=\"center\">\n            <img class=\"img-fluid\" src = 'https://images.pexels.com/photos/914931/pexels-photo-914931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='phone' /> \n        </div>\n    </div>\n    <!-- <a id=\"callMe\" href=\"\"><img class=\"animations\" src=\"../../assets/phone-receiver.png\" [@flyInOut]=\"callState\" /></a> -->\n    <!-- <button type=\"button\" class=\"btn btn-success animations\" [@flyInOut]=\"callState\"><b>Call Me!</b></button> -->\n</div>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.callState = 'out';
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log('doin it');
            _this.callState = 'in';
        }, 3000);
    };
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__("./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("./src/app/landing-page/landing-page.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('flyInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('0.2s 0.1s ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/logged-in/logged-in.component.css":
/***/ (function(module, exports) {

module.exports = "@media (max-width: 850px) {\r\n\r\n    .container {\r\n        height: 100vh;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-direction: column;\r\n                flex-direction: column;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n    }\r\n\r\n    h2 {\r\n        text-align: center;\r\n        margin-bottom: 3vh;\r\n        margin-top: 3vh;\r\n    }\r\n\r\n    .btn {\r\n        -ms-flex-line-pack: center;\r\n            align-content: center;\r\n        width: 80vw;\r\n        padding-top: 7.5vh;\r\n        padding-bottom: 7.5vh;\r\n    }\r\n\r\n    p {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n\r\n@media (min-width: 850px) and (max-width: 1800px) {\r\n\r\n h2 {\r\n     text-align: center;\r\n     margin-top: 5vh;\r\n     margin-bottom: 1vh;\r\n }\r\n\r\n a {\r\n     text-align: center;\r\n }\r\n\r\n .btn {\r\n     padding-top: 7.5vh;\r\n     padding-bottom: 7.5vh;\r\n     width: 32vw;\r\n     font-size: 1em;\r\n }\r\n\r\n p {\r\n     text-align: center;\r\n     font-size: 1em;\r\n }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/logged-in/logged-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userTruc.currentUser\" class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n            <h2>Hi Luke {{this.user.fullName}}!</h2>\r\n        </div>\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n            <p>How can we help you?</p>\r\n        </div>\r\n        <div class=\"col-xl-12 col-lg-12 col-md-12 col-sm-12 btn\">\r\n            <a href=\"https://www.uwtservices.com/cp/\"><button type=\"button\" class=\"btn btn-primary\"><b>Manage my account</b></button></a>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/logged-in/logged-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInComponent = /** @class */ (function () {
    function LoggedInComponent(userTruc, resTruc) {
        this.userTruc = userTruc;
        this.resTruc = resTruc;
    }
    LoggedInComponent.prototype.ngOnInit = function () {
        this.userTruc.check()
            .catch(function (err) {
            console.log(err);
        });
    };
    LoggedInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logged-in',
            template: __webpack_require__("./src/app/logged-in/logged-in.component.html"),
            styles: [__webpack_require__("./src/app/logged-in/logged-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoggedInComponent);
    return LoggedInComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    background-color: orange;\r\n    color: white;\r\n    border: 0;\r\n    border-radius: 10px;\r\n    padding-left: 3.5vw;\r\n    padding-right: 3.5vw;\r\n    padding-top: 2vh;\r\n    padding-bottom: 2vh;\r\n    margin-bottom: 3vh;\r\n    text-align: right;\r\n}\r\n\r\n.col-xl-6 {\r\n    margin-top: 10vh;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n      <h2>Log in</h2>\n      <p>Please enter login credentials for access to your account.</p>      \n    </div>\n    <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n    <form (ngSubmit)=\"loginSubmit()\">\n            \n            <label>\n              <input type=\"text\" [(ngModel)]=\"formCreds.email\"\n              name=\"email\" placeholder=\"Email\" />\n            </label>\n          <br />\n    \n            <label>\n              <input type=\"password\" [(ngModel)]=\"formCreds.password\"\n              name=\"password\" placeholder=\"Password\" />\n            </label>\n          <br />\n            <div *ngIf=\"ifErrMsg\">{{displayMsg}}</div>\n            <button class=\"btn navbar-btn\"><b>Go!</b></button>\n          </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userTruc, resTruc) {
        this.userTruc = userTruc;
        this.resTruc = resTruc;
        this.ifErrMsg = false;
        this.formCreds = new __WEBPACK_IMPORTED_MODULE_2__api_user_service__["a" /* LoginCredentials */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.userTruc.postLogin(this.formCreds)
            .then(function (result) {
            _this.resTruc.navigateByUrl('/main');
            //I want to take them to a secret logged-in page, not the sales landing page
        })
            .catch(function (err) {
            console.log('Login error');
            console.log(err.error.message);
            _this.ifErrMsg = true;
            _this.displayMsg = err.error.message;
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>HTTP ERROR 404</h2>\n<p>Sorry, this page does not exist!</p>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/plans/plans.component.css":
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700italic,700,900italic,900);\r\n@import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900);\r\n@import url(https://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900);\r\nbody{background-color:white;}\r\n#generic_price_table{\r\n\tbackground-color: white;\r\n}\r\n/*PRICE COLOR CODE START*/\r\n#generic_price_table .generic_content{\r\n\tbackground-color: #fff;\r\n}\r\n#generic_price_table .generic_content .generic_head_price{\r\n\tbackground-color: #f6f6f6;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_head_content .head_bg{\r\n\tborder-color: #e4e4e4 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #e4e4e4;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_head_content .head span{\r\n\tcolor: #525252;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .sign{\r\n    color: #414141;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .currency{\r\n    color: #414141;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .cent{\r\n    color: #414141;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag .month{\r\n    color: #414141;\r\n}\r\n#generic_price_table .generic_content .generic_feature_list ul li{\t\r\n\tcolor: #a7a7a7;\r\n}\r\n#generic_price_table .generic_content .generic_feature_list ul li span{\r\n\tcolor: #414141;\r\n}\r\n#generic_price_table .generic_content .generic_feature_list ul li:hover{\r\n\tbackground-color: #E4E4E4;\r\n\tborder-left: 5px solid orange;\r\n}\r\n#generic_price_table .generic_content .generic_price_btn a{\r\n\tborder: 1px solid orange; \r\n    color: orange;\r\n}\r\n#generic_price_table .generic_content.active .generic_head_price .generic_head_content .head_bg,\r\n#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head_bg{\r\n\tborder-color: orange rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) orange;\r\n\tcolor: #fff;\r\n}\r\n#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head span,\r\n#generic_price_table .generic_content.active .generic_head_price .generic_head_content .head span{\r\n\tcolor: #fff;\r\n}\r\n#generic_price_table .generic_content:hover .generic_price_btn a,\r\n#generic_price_table .generic_content.active .generic_price_btn a{\r\n\tbackground-color: orange;\r\n\tcolor: #fff;\r\n}\r\n#generic_price_table{\r\n\tmargin: 50px 0 50px 0;\r\n    font-family: 'Raleway', sans-serif;\r\n}\r\n.row .table{\r\n    padding: 28px 0;\r\n}\r\n/*PRICE BODY CODE START*/\r\n#generic_price_table .generic_content{\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\ttext-align: center;\r\n}\r\n#generic_price_table .generic_content .generic_head_price {\r\n\tmargin: 0 0 20px 0;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_head_content{\r\n\tmargin: 0 0 50px 0;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_head_content .head_bg{\r\n    border-style: solid;\r\n    border-width: 90px 1411px 23px 399px;\r\n\tposition: absolute;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_head_content .head{\r\n\tpadding-top: 40px;\r\n\tposition: relative;\r\n\tz-index: 1;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_head_content .head span{\r\n    font-family: \"Raleway\",sans-serif;\r\n    font-size: 28px;\r\n    font-weight: 400;\r\n    letter-spacing: 2px;\r\n    margin: 0;\r\n    padding: 0;\r\n    text-transform: uppercase;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag{\r\n\tpadding: 0 0 20px;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag .price{\r\n\tdisplay: block;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .sign{\r\n    display: inline-block;\r\n    font-family: \"Lato\",sans-serif;\r\n    font-size: 28px;\r\n    font-weight: 400;\r\n    vertical-align: middle;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .currency{\r\n    font-family: \"Lato\",sans-serif;\r\n    font-size: 60px;\r\n    font-weight: 300;\r\n    letter-spacing: -2px;\r\n    line-height: 60px;\r\n    padding: 0;\r\n    vertical-align: middle;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag .price .cent{\r\n    display: inline-block;\r\n    font-family: \"Lato\",sans-serif;\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    vertical-align: bottom;\r\n}\r\n#generic_price_table .generic_content .generic_head_price .generic_price_tag .month{\r\n    font-family: \"Lato\",sans-serif;\r\n    font-size: 18px;\r\n    font-weight: 400;\r\n    letter-spacing: 3px;\r\n    vertical-align: bottom;\r\n}\r\n#generic_price_table .generic_content .generic_feature_list ul{\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n}\r\n#generic_price_table .generic_content .generic_feature_list ul li{\r\n\tfont-family: \"Lato\",sans-serif;\r\n\tfont-size: 18px;\r\n\tpadding: 15px 0;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table .generic_content .generic_feature_list ul li:hover{\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n\t-moz-transition: all 0.3s ease-in-out 0s;\r\n\t-ms-transition: all 0.3s ease-in-out 0s;\r\n\t-o-transition: all 0.3s ease-in-out 0s;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\r\n}\r\n#generic_price_table .generic_content .generic_feature_list ul li .fa{\r\n\tpadding: 0 10px;\r\n}\r\n#generic_price_table .generic_content .generic_price_btn{\r\n\tmargin: 20px 0 32px;\r\n}\r\n#generic_price_table .generic_content .generic_price_btn a{\r\n    border-radius: 50px;\r\n\t-moz-border-radius: 50px;\r\n\t-ms-border-radius: 50px;\r\n\t-o-border-radius: 50px;\r\n\t-webkit-border-radius: 50px;\r\n    display: inline-block;\r\n    font-family: \"Lato\",sans-serif;\r\n    font-size: 18px;\r\n    outline: medium none;\r\n    padding: 12px 30px;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n}\r\n#generic_price_table .generic_content,\r\n#generic_price_table .generic_content:hover,\r\n#generic_price_table .generic_content .generic_head_price .generic_head_content .head_bg,\r\n#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head_bg,\r\n#generic_price_table .generic_content .generic_head_price .generic_head_content .head h2,\r\n#generic_price_table .generic_content:hover .generic_head_price .generic_head_content .head h2,\r\n#generic_price_table .generic_content .price,\r\n#generic_price_table .generic_content:hover .price,\r\n#generic_price_table .generic_content .generic_price_btn a,\r\n#generic_price_table .generic_content:hover .generic_price_btn a{\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n\t-moz-transition: all 0.3s ease-in-out 0s;\r\n\t-ms-transition: all 0.3s ease-in-out 0s;\r\n\t-o-transition: all 0.3s ease-in-out 0s;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n}\r\n@media (max-width: 320px) {\t\r\n}\r\n@media (max-width: 767px) {\r\n\t#generic_price_table .generic_content{\r\n\t\tmargin-bottom:75px;\r\n\t}\r\n}\r\n@media (min-width: 768px) and (max-width: 991px) {\r\n\t#generic_price_table .col-md-3{\r\n\t\tfloat:left;\r\n\t\twidth:50%;\r\n\t}\r\n\t\r\n\t#generic_price_table .col-md-4{\r\n\t\tfloat:left;\r\n\t\twidth:50%;\r\n\t}\r\n\t\r\n\t#generic_price_table .generic_content{\r\n\t\tmargin-bottom:75px;\r\n\t}\r\n}\r\n@media (min-width: 992px) and (max-width: 1199px) {\r\n}\r\n@media (min-width: 1200px) {\r\n}\r\n#generic_price_table_home{\r\n\t font-family: 'Raleway', sans-serif;\r\n}\r\n.text-center h1,\r\n.text-center h1 a{\r\n\tcolor: #7885CB;\r\n\tfont-size: 30px;\r\n\tfont-weight: 300;\r\n\ttext-decoration: none;\r\n}\r\n.demo-pic{\r\n\tmargin: 0 auto;\r\n}\r\n.demo-pic:hover{\r\n\topacity: 0.7;\r\n}\r\n#generic_price_table_home ul{\r\n\tmargin: 0 auto;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tdisplay: table;\r\n}\r\n#generic_price_table_home li{\r\n\tfloat: left;\r\n}\r\n#generic_price_table_home li + li{\r\n\tmargin-left: 10px;\r\n\tpadding-bottom: 10px;\r\n}\r\n#generic_price_table_home li a{\r\n\tdisplay: block;\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tfont-size: 0px;\r\n}\r\n#generic_price_table_home .blue{\r\n\tbackground: #3498DB;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table_home .emerald{\r\n\tbackground: #2ECC71;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table_home .grey{\r\n\tbackground: #7F8C8D;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table_home .midnight{\r\n\tbackground: #34495E;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table_home .orange{\r\n\tbackground: #E67E22;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table_home .purple{\r\n\tbackground: #9B59B6;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table_home .red{\r\n\tbackground: #E74C3C;\r\n\t-webkit-transition:all 0.3s ease-in-out 0s;\r\n\ttransition:all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table_home .turquoise{\r\n\tbackground: #1ABC9C;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table_home .blue:hover,\r\n#generic_price_table_home .emerald:hover,\r\n#generic_price_table_home .grey:hover,\r\n#generic_price_table_home .midnight:hover,\r\n#generic_price_table_home .orange:hover,\r\n#generic_price_table_home .purple:hover,\r\n#generic_price_table_home .red:hover,\r\n#generic_price_table_home .turquoise:hover{\r\n\tborder-bottom-left-radius: 50px;\r\n    border-bottom-right-radius: 50px;\r\n    border-top-left-radius: 50px;\r\n    border-top-right-radius: 50px;\r\n\t-webkit-transition: all 0.3s ease-in-out 0s;\r\n\ttransition: all 0.3s ease-in-out 0s;\r\n}\r\n#generic_price_table_home .divider{\r\n\tborder-bottom: 1px solid #ddd;\r\n\tmargin-bottom: 20px;\r\n\tpadding: 20px;\r\n}\r\n#generic_price_table_home .divider span{\r\n\twidth: 100%;\r\n\tdisplay: table;\r\n\theight: 2px;\r\n\tbackground: #ddd;\r\n\tmargin: 50px auto;\r\n\tline-height: 2px;\r\n}\r\n#generic_price_table_home .itemname{\r\n\ttext-align: center;\r\n\tfont-size: 50px ;\r\n\tpadding: 50px 0 20px ;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tmargin-bottom: 40px;\r\n\ttext-decoration: none;\r\n    font-weight: 300;\r\n}\r\n#generic_price_table_home .itemnametext{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    padding-top: 5px;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n}\r\n#generic_price_table_home .footer{\r\n\tpadding:40px 0;\r\n}\r\n.price-heading{\r\n    text-align: center;\r\n}\r\n.price-heading h1{\r\n\tcolor: #666;\r\n\tmargin: 0;\r\n\tpadding: 0 0 50px 0;\r\n}\r\n.demo-button {\r\n    background-color: #333333;\r\n    color: #ffffff;\r\n    display: table;\r\n    font-size: 20px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 20px;\r\n    margin-bottom: 50px;\r\n    outline-color: -moz-use-text-color;\r\n    outline-style: none;\r\n    outline-width: medium ;\r\n    padding: 10px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n.bottom_btn{\r\n\tbackground-color: #333333;\r\n    color: #ffffff;\r\n    display: table;\r\n    font-size: 28px;\r\n    margin: 60px auto 20px;\r\n    padding: 10px 25px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n}\r\n.demo-button:hover{\r\n\tbackground-color: #666;\r\n\tcolor: #FFF;\r\n\ttext-decoration:none;\r\n\t\r\n}\r\n.bottom_btn:hover{\r\n\tbackground-color: #666;\r\n\tcolor: #FFF;\r\n\ttext-decoration:none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/plans/plans.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"generic_price_table\">   \n  <section>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <!--PRICE HEADING START-->\n          <div class=\"price-heading clearfix\">\n            <h1>Plans for every team size</h1>\n          </div>\n          <!--//PRICE HEADING END-->\n        </div>\n      </div>\n    </div>\n    <div class=\"container\">\n      <!--BLOCK ROW START-->\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <!--PRICE CONTENT START-->\n          <div class=\"generic_content clearfix\">\n            <!--HEAD PRICE DETAIL START-->\n            <div class=\"generic_head_price clearfix\">\n              <!--HEAD CONTENT START-->\n              <div class=\"generic_head_content clearfix\">\n                <!--HEAD START-->\n                <div class=\"head_bg\"></div>\n                  <div class=\"head\">\n                    <span>Power</span>\n                  </div>\n                <!--//HEAD END-->                    \n                </div>\n                <!--//HEAD CONTENT END-->\n                                \n        <!--PRICE START-->\n        <div class=\"generic_price_tag clearfix\">\t\n          <span class=\"price\">\n          <span class=\"sign\">$</span>\n          <span class=\"currency\">200</span>\n          <span class=\"month\">/ month</span>\n          </span>\n        </div>\n        <!--//PRICE END-->\n                                \n      </div>                            \n      <!--//HEAD PRICE DETAIL END-->\n                            \n      <!--FEATURE LIST START-->\n      <div class=\"generic_feature_list\">\n        <ul>\n          <li><span>50</span> Calls per month</li>\n          <li><span>120</span> Call history (days)</li>\n          <li><span></span>Advanced features included</li>\n          <li><span></span> Dedicated Account Management</li>\n        </ul>\n      </div>\n      <!--//FEATURE LIST END-->\n                            \n      <!--BUTTON START-->\n      <div class=\"generic_price_btn clearfix\">\n        <a class=\"\" routerLink=\"/signup\">Sign up</a>\n      </div>\n      <!--//BUTTON END-->\n                            \n    </div>\n    <!--//PRICE CONTENT END-->\n                            \n  </div>\n                    \n  <div class=\"col-md-4\">\n                    \n    <!--PRICE CONTENT START-->\n    <div class=\"generic_content clearfix\">\n                            \n    <!--HEAD PRICE DETAIL START-->\n    <div class=\"generic_head_price clearfix\">\n                            \n    <!--HEAD CONTENT START-->\n    <div class=\"generic_head_content clearfix\">\n                                \n    <!--HEAD START-->\n    <div class=\"head_bg\"></div>\n    <div class=\"head\">\n    <span>Professional</span>\n    </div>\n    <!--//HEAD END-->\n                                    \n    </div>\n    <!--//HEAD CONTENT END-->\n    <!--PRICE START-->\n    <div class=\"generic_price_tag clearfix\">\t\n      <span class=\"price\">\n      <span class=\"sign\">$</span>\n      <span class=\"currency\">350</span>\n      <span class=\"cent\"></span>\n      <span class=\"month\">/ month</span>\n      </span>\n    </div>\n    <!--//PRICE END-->\n                                \n  </div>                            \n  <!--//HEAD PRICE DETAIL END-->\n                            \n    <!--FEATURE LIST START-->\n    <div class=\"generic_feature_list\">\n      <ul>\n          <li><span>125</span> Calls per month</li>\n          <li><span>180</span> Call history (days)</li>\n          <li><span></span>Advanced features included</li>\n          <li><span></span> Dedicated Account Management</li>\n      </ul>\n      </div>\n    <!--//FEATURE LIST END-->\n                            \n    <!--BUTTON START-->\n      <div class=\"generic_price_btn clearfix\">\n        <a class=\"\" routerLink=\"/signup\">Sign up</a>\n      </div>\n    <!--//BUTTON END-->\n                            \n  </div>\n\n                            \n    </div>\n      <div class=\"col-md-4\">\n        <!--PRICE CONTENT START-->\n      <div class=\"generic_content clearfix\">\n        <!--HEAD PRICE DETAIL START-->\n        <div class=\"generic_head_price clearfix\">\n        <!--HEAD CONTENT START-->\n        <div class=\"generic_head_content clearfix\">\n        <!--HEAD START-->\n        <div class=\"head_bg\"></div>\n          <div class=\"head\">\n          <span>Enterprise</span>\n          </div>\n        <!--//HEAD END-->\n                                    \n    </div>\n    <!--//HEAD CONTENT END-->\n                                \n    <!--PRICE START-->\n    <div class=\"generic_price_tag clearfix\">\t\n      <span class=\"price\">\n      <span class=\"sign\">$</span>\n      <span class=\"currency\">500</span>\n      <span class=\"cent\"></span>\n      <span class=\"month\">/ month</span>\n      </span>\n    </div>\n    <!--//PRICE END-->\n                                \n    </div>                            \n    <!--//HEAD PRICE DETAIL END-->\n                            \n    <!--FEATURE LIST START-->\n    <div class=\"generic_feature_list\">\n      <ul>\n          <li><span>200</span> Calls per month</li>\n          <li><span>180</span> Call history (days)</li>\n          <li><span></span>Advanced features included</li>\n          <li><span></span> Dedicated Account Management</li>\n      </ul>\n    </div>\n    <!--//FEATURE LIST END-->\n                            \n    <!--BUTTON START-->\n      <div class=\"generic_price_btn clearfix\">\n        <a class=\"\" routerLink=\"/signup\">Sign up</a>\n      </div>\n    <!--//BUTTON END-->\n                            \n    </div>\n    <!--//PRICE CONTENT END-->\n                            \n    </div>\n    </div>\t\n    <!--//BLOCK ROW END-->\n                \n    </div>\n        </section>             \n    </div>"

/***/ }),

/***/ "./src/app/plans/plans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlansComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlansComponent = /** @class */ (function () {
    function PlansComponent() {
    }
    PlansComponent.prototype.ngOnInit = function () {
    };
    PlansComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plans',
            template: __webpack_require__("./src/app/plans/plans.component.html"),
            styles: [__webpack_require__("./src/app/plans/plans.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlansComponent);
    return PlansComponent;
}());



/***/ }),

/***/ "./src/app/request-signup/request-signup.component.css":
/***/ (function(module, exports) {

module.exports = ".btn {\r\n    background-color: orange;\r\n    color: white;\r\n    border: 0;\r\n    border-radius: 10px;\r\n    padding-left: 3.5vw;\r\n    padding-right: 3.5vw;\r\n    padding-top: 2vh;\r\n    padding-bottom: 2vh;\r\n    margin-bottom: 3vh;\r\n    text-align: right;\r\n}\r\n\r\n.col-xl-6 {\r\n    margin-top: 10vh;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}"

/***/ }),

/***/ "./src/app/request-signup/request-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n            <h2>Sign up</h2>\n            <p>Please enter your contact details and we will be in touch with you as soon as possible regarding account activation</p>\n        </div>\n        <div class=\"col-xl-6 col-lg-6 col-md-12 col-sm-12\">\n            <form (ngSubmit)=\"signupSubmit()\">\n                <label>\n                  <input type=\"text\" [(ngModel)]=\"signupCreds.fullName\" required\n                  name=\"fullName\" placeholder=\"Full name\" />\n                </label>\n              <br />\n        \n                <label>\n                  <input type=\"text\" [(ngModel)]=\"signupCreds.company\" required\n                  name=\"company\" placeholder=\"Company\" />\n                </label>\n              <br />\n                <label>\n                  <input type=\"text\" [(ngModel)]=\"signupCreds.email\" required\n                  name=\"email\" placeholder=\"Business email\" />\n                </label>\n              <br />\n                <label>\n                  <input type=\"text\" [(ngModel)]=\"signupCreds.phoneNumber\" required\n                  name=\"phoneNumber\" placeholder=\"Phone number\" />\n                </label>\n              <br />\n                <label>\n                  <select [(ngModel)]=\"signupCreds.planType\"\n                  name=\"planType\">\n                    <option selected disabled>Choose a plan</option>\n                    <option>Power</option>\n                    <option>Professional</option>\n                    <option>Enterprise</option>\n                  </select>\n                </label>\n                <br />\n                <button class=\"btn navbar-btn\"><b>Submit</b></button>\n              </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/request-signup/request-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_user_service__ = __webpack_require__("./src/app/api/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestSignupComponent = /** @class */ (function () {
    function RequestSignupComponent(userTruc, resTruc) {
        this.userTruc = userTruc;
        this.resTruc = resTruc;
        this.ifSubmitMsg = false;
        this.signupCreds = new __WEBPACK_IMPORTED_MODULE_2__api_user_service__["b" /* SignupCredentials */]();
        this.signupCreds.planType = "Choose a plan";
    }
    RequestSignupComponent.prototype.ngOnInit = function () {
    };
    RequestSignupComponent.prototype.signupSubmit = function () {
        var _this = this;
        this.userTruc.postSignup(this.signupCreds)
            .then(function (result) {
            _this.resTruc.navigateByUrl('/');
        })
            .catch(function (err) {
            console.log('Submission error');
            console.log(err);
        });
    };
    RequestSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-request-signup',
            template: __webpack_require__("./src/app/request-signup/request-signup.component.html"),
            styles: [__webpack_require__("./src/app/request-signup/request-signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], RequestSignupComponent);
    return RequestSignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    backUrl: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map