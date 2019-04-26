(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_more_more_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/more/more.component */ "./src/app/components/more/more.component.ts");
/* harmony import */ var _components_dota_players_dota_players_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dota-players/dota-players.component */ "./src/app/components/dota-players/dota-players.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");












var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'more', component: _components_more_more_component__WEBPACK_IMPORTED_MODULE_5__["MoreComponent"] },
    { path: 'dota-players', component: _components_dota_players_dota_players_component__WEBPACK_IMPORTED_MODULE_6__["DotaPlayersComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n   width: 213px;\n   height: 56px;\n   left: 96px;\n   top: 9px;\n\n   font-family: Monda;\n   font-style: normal;\n   font-weight: normal;\n   line-height: 16px;\n   font-size: 16px;\n   text-align: center;\n   letter-spacing: 0.04em;\n   text-transform: uppercase;\n\n   color: #000000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxZQUFZO0dBQ1osWUFBWTtHQUNaLFVBQVU7R0FDVixRQUFROztHQUVSLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIsbUJBQW1CO0dBQ25CLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLHNCQUFzQjtHQUN0Qix5QkFBeUI7O0dBRXpCLGNBQWM7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgd2lkdGg6IDIxM3B4O1xuICAgaGVpZ2h0OiA1NnB4O1xuICAgbGVmdDogOTZweDtcbiAgIHRvcDogOXB4O1xuXG4gICBmb250LWZhbWlseTogTW9uZGE7XG4gICBmb250LXN0eWxlOiBub3JtYWw7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICBmb250LXNpemU6IDE2cHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgY29sb3I6ICMwMDAwMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section>\n  <flash-messages></flash-messages>\n   <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ESports';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_more_more_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/more/more.component */ "./src/app/components/more/more.component.ts");
/* harmony import */ var _components_dota_players_dota_players_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dota-players/dota-players.component */ "./src/app/components/dota-players/dota-players.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _services_league_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/league.service */ "./src/app/services/league.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
















//Backend






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _components_more_more_component__WEBPACK_IMPORTED_MODULE_10__["MoreComponent"],
                _components_dota_players_dota_players_component__WEBPACK_IMPORTED_MODULE_11__["DotaPlayersComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_19__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_league_service__WEBPACK_IMPORTED_MODULE_16__["LeagueService"], _services_validate_service__WEBPACK_IMPORTED_MODULE_18__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-image {\n   background-image: url(\"/assets/img/adult-competition-computers-929831.jpg\"); /* The image used */\n   background-color: #cccccc; /* Used if the image is unavailable */\n   height: 500px; /* You must set a specified height */\n   background-position: center; /* Center the image */\n   background-repeat: no-repeat; /* Do not repeat the image */\n   background-size: cover;\n}\n\n/* Place text in the middle of the image */\n\n.hero-text {\n  text-align: center;\n  position: absolute;\n  text-transform: uppercase;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, 40%);\n          transform: translate(-50%, 40%);\n  color: white;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\nh2 {\n   font-family: Monda;\n   font-style: normal;\n   font-weight: normal;\n   text-transform: uppercase;\n   line-height: 24px;\n   font-size: 24px;\n   text-align: center;\n   -webkit-transform: translate(0%, 100%);\n           transform: translate(0%, 100%);\n}\n\np {\n   font-family: Monda;\n   font-style: normal;\n   font-weight: bold;\n   line-height: 30px;\n   font-size: 24px;\n   text-align: center;\n   -webkit-transform: translate(0%, 50%);\n           transform: translate(0%, 50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csMkVBQTJFLEVBQUUsbUJBQW1CO0dBQ2hHLHlCQUF5QixFQUFFLHFDQUFxQztHQUNoRSxhQUFhLEVBQUUsb0NBQW9DO0dBQ25ELDJCQUEyQixFQUFFLHFCQUFxQjtHQUNsRCw0QkFBNEIsRUFBRSw0QkFBNEI7R0FDMUQsc0JBQXNCO0FBQ3pCOztBQUVBLDBDQUEwQzs7QUFDMUM7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixRQUFRO0VBQ1IsU0FBUztFQUNULHVDQUErQjtVQUEvQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLDRDQUE0QztBQUM5Qzs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIsbUJBQW1CO0dBQ25CLHlCQUF5QjtHQUN6QixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixzQ0FBOEI7V0FBOUIsOEJBQThCO0FBQ2pDOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIscUNBQTZCO1dBQTdCLDZCQUE2QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvLWltYWdlIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL2FkdWx0LWNvbXBldGl0aW9uLWNvbXB1dGVycy05Mjk4MzEuanBnXCIpOyAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYzsgLyogVXNlZCBpZiB0aGUgaW1hZ2UgaXMgdW5hdmFpbGFibGUgKi9cbiAgIGhlaWdodDogNTAwcHg7IC8qIFlvdSBtdXN0IHNldCBhIHNwZWNpZmllZCBoZWlnaHQgKi9cbiAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBpbWFnZSAqL1xuICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogRG8gbm90IHJlcGVhdCB0aGUgaW1hZ2UgKi9cbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi8qIFBsYWNlIHRleHQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgaW1hZ2UgKi9cbi5oZXJvLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuaDIge1xuICAgZm9udC1mYW1pbHk6IE1vbmRhO1xuICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICBsaW5lLWhlaWdodDogMjRweDtcbiAgIGZvbnQtc2l6ZTogMjRweDtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxMDAlKTtcbn1cblxucCB7XG4gICBmb250LWZhbWlseTogTW9uZGE7XG4gICBmb250LXN0eWxlOiBub3JtYWw7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgZm9udC1zaXplOiAyNHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDUwJSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-image\">\n  <div class=\"hero-text\">\n    <h1>The ultimate esports gamehub experience.</h1>\n  </div>\n</div>\n\n<h2>Esports</h2>\n<p> View the latest scores, stats, rankings and more from the most popular game leagues.\nFrom games like League of Legends to NBA 2K, we got you covered.</p>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your Dashboard</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dota-players/dota-players.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dota-players/dota-players.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG90YS1wbGF5ZXJzL2RvdGEtcGxheWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dota-players/dota-players.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/dota-players/dota-players.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title> Dota 2 Players </title>\n\n<p>Tournaments:</p>\n<ul>\n\n   <div *ngFor=\"let league of leagues | async\">\n      <li *ngIf=\"league.tier == 'professional'\">\n            <td>{{ league.name }}</td>\n      </li>\n   </div>\n\n\n</ul>\n<p>Pro Players:</p>\n\n<ul>\n\n   <li *ngFor=\"let player of players | async\">\n      <img src=\"{{ player.avatar }}\" alt=\"user_avatar\">\n     {{ player.name }}\n     Team: {{ player.team_name }}\n     <br>\n   </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/dota-players/dota-players.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dota-players/dota-players.component.ts ***!
  \*******************************************************************/
/*! exports provided: DotaPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DotaPlayersComponent", function() { return DotaPlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_league_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/league.service */ "./src/app/services/league.service.ts");



var DotaPlayersComponent = /** @class */ (function () {
    function DotaPlayersComponent(leagueService) {
        this.leagueService = leagueService;
    }
    DotaPlayersComponent.prototype.ngOnInit = function () {
        this.players = this.leagueService.getPlayers();
        this.leagues = this.leagueService.getLeagues();
    };
    DotaPlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dota-players',
            template: __webpack_require__(/*! ./dota-players.component.html */ "./src/app/components/dota-players/dota-players.component.html"),
            styles: [__webpack_require__(/*! ./dota-players.component.css */ "./src/app/components/dota-players/dota-players.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_league_service__WEBPACK_IMPORTED_MODULE_2__["LeagueService"]])
    ], DotaPlayersComponent);
    return DotaPlayersComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n   font-family: Monda;\n   font-style: normal;\n   font-weight: normal;\n   line-height: 30px;\n   font-size: 30px;\n   text-align: center;\n   letter-spacing: 0.04em;\n}\n\np {\n   font-family: Monda;\n   line-height: 40px;\n   font-size: 40px;\n   letter-spacing: 0.04em;\n}\n\n.hero-image {\n   background-image: url(\"/assets/img/photo-1542751371-adc38448a05e.jpg\"); /* The image used */\n   background-color: #cccccc; /* Used if the image is unavailable */\n   height: 500px; /* You must set a specified height */\n   background-position: center; /* Center the image */\n   background-repeat: no-repeat; /* Do not repeat the image */\n   background-size: cover;\n}\n\n/* Place text in the middle of the image */\n\n.hero-text {\n  text-align: center;\n  position: absolute;\n  text-transform: uppercase;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n  color: white;\n  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGtCQUFrQjtHQUNsQixrQkFBa0I7R0FDbEIsbUJBQW1CO0dBQ25CLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2Ysa0JBQWtCO0dBQ2xCLHNCQUFzQjtBQUN6Qjs7QUFFQTtHQUNHLGtCQUFrQjtHQUNsQixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLHNCQUFzQjtBQUN6Qjs7QUFFQTtHQUNHLHNFQUFzRSxFQUFFLG1CQUFtQjtHQUMzRix5QkFBeUIsRUFBRSxxQ0FBcUM7R0FDaEUsYUFBYSxFQUFFLG9DQUFvQztHQUNuRCwyQkFBMkIsRUFBRSxxQkFBcUI7R0FDbEQsNEJBQTRCLEVBQUUsNEJBQTRCO0dBQzFELHNCQUFzQjtBQUN6Qjs7QUFFQSwwQ0FBMEM7O0FBQzFDO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWiw0Q0FBNEM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgZm9udC1mYW1pbHk6IE1vbmRhO1xuICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgZm9udC1zaXplOiAzMHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbn1cblxucCB7XG4gICBmb250LWZhbWlseTogTW9uZGE7XG4gICBsaW5lLWhlaWdodDogNDBweDtcbiAgIGZvbnQtc2l6ZTogNDBweDtcbiAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG59XG5cbi5oZXJvLWltYWdlIHtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1nL3Bob3RvLTE1NDI3NTEzNzEtYWRjMzg0NDhhMDVlLmpwZ1wiKTsgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7IC8qIFVzZWQgaWYgdGhlIGltYWdlIGlzIHVuYXZhaWxhYmxlICovXG4gICBoZWlnaHQ6IDUwMHB4OyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXG4gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cbiAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXG4gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4vKiBQbGFjZSB0ZXh0IGluIHRoZSBtaWRkbGUgb2YgdGhlIGltYWdlICovXG4uaGVyby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-image\">\n  <div class=\"hero-text\">\n    <h1>Esports</h1>\n    <p>Built for the fans.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\" >Login</h2>\n<form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"Username\">Username</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter Username\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n        <label for=\"Password\">Password</label>\n        <input type=\"password\" class=\"form-control\" placeholder=\" Enter Password\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <input class=\"btn btn-lg btn-primary\" type=\"submit\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/more/more.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/more/more.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9yZS9tb3JlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/more/more.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/more/more.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Coming soon...\n</p>\n"

/***/ }),

/***/ "./src/app/components/more/more.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/more/more.component.ts ***!
  \***************************************************/
/*! exports provided: MoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreComponent", function() { return MoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoreComponent = /** @class */ (function () {
    function MoreComponent() {
    }
    MoreComponent.prototype.ngOnInit = function () {
        /*this.issueService.getIssues().subscribe((issues) => {
           console.log(issues);
        });*/
    };
    MoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more',
            template: __webpack_require__(/*! ./more.component.html */ "./src/app/components/more/more.component.html"),
            styles: [__webpack_require__(/*! ./more.component.css */ "./src/app/components/more/more.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoreComponent);
    return MoreComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #ff\n}\nheader .logo {\n   font-family: Monda;\n   font-style: normal;\n   font-weight: normal;\n   line-height: 16px;\n   font-size: 36px;\n   text-align: center;\n   letter-spacing: 0.04em;\n   text-transform: uppercase;\n\n   color: #000000;\n}\nheader nav {\n   justify-self: right;\n}\nheader nav ul {\n   list-style-type: none;\n   margin: 0;\n   padding: 0;\n}\n/*list items in the nav */\nheader nav ul li {\n   float: left;\n}\nheader nav ul li a {\n   font-family: Roboto;\n   font-style: normal;\n   font-weight: normal;\n   line-height: 16px;\n   font-size: 14px;\n   text-align: center;\n   letter-spacing: 0.04em;\n   text-transform: uppercase;\n   padding: 1em;\n\n   color: rgba(0, 0, 0, 0.88);\n}\nheader nav ul li a:hover {\n   color: #0066CC;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGO0FBQ0E7R0FDRyxrQkFBa0I7R0FDbEIsa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixzQkFBc0I7R0FDdEIseUJBQXlCOztHQUV6QixjQUFjO0FBQ2pCO0FBQ0E7R0FDRyxtQkFBbUI7QUFDdEI7QUFDQTtHQUNHLHFCQUFxQjtHQUNyQixTQUFTO0dBQ1QsVUFBVTtBQUNiO0FBRUEseUJBQXlCO0FBQ3pCO0dBQ0csV0FBVztBQUNkO0FBQ0E7R0FDRyxtQkFBbUI7R0FDbkIsa0JBQWtCO0dBQ2xCLG1CQUFtQjtHQUNuQixpQkFBaUI7R0FDakIsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixzQkFBc0I7R0FDdEIseUJBQXlCO0dBQ3pCLFlBQVk7O0dBRVosMEJBQTBCO0FBQzdCO0FBQ0E7R0FDRyxjQUFjO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZcbn1cbmhlYWRlciAubG9nbyB7XG4gICBmb250LWZhbWlseTogTW9uZGE7XG4gICBmb250LXN0eWxlOiBub3JtYWw7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICBmb250LXNpemU6IDM2cHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgY29sb3I6ICMwMDAwMDA7XG59XG5oZWFkZXIgbmF2IHtcbiAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG5oZWFkZXIgbmF2IHVsIHtcbiAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgIG1hcmdpbjogMDtcbiAgIHBhZGRpbmc6IDA7XG59XG5cbi8qbGlzdCBpdGVtcyBpbiB0aGUgbmF2ICovXG5oZWFkZXIgbmF2IHVsIGxpIHtcbiAgIGZsb2F0OiBsZWZ0O1xufVxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICBmb250LXN0eWxlOiBub3JtYWw7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICBmb250LXNpemU6IDE0cHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgIHBhZGRpbmc6IDFlbTtcblxuICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44OCk7XG59XG5oZWFkZXIgbmF2IHVsIGxpIGE6aG92ZXIge1xuICAgY29sb3I6ICMwMDY2Q0M7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">{{appTitle}}</a>\n    <nav>\n      <ul>\n        <li><a routerLink=\"/\">Home</a></li>\n        <li><a routerLink=\"/about\">About</a></li>\n        <li><a routerLink=\"/dota-players\">Dota2</a></li>\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/profile\">Profile</a></li>\n        <li><a *ngIf=\"authService.loggedIn()\" routerLink=\"/dashboard\">Dashboard</a></li>\n        <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\">Register</a></li>\n        <li><a *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\">Login</a></li>\n        <!--<li class=\"nav-item\" *ngIf=\"authService.loggedIn()\"><a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>-->\n        <li><a *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.appTitle = 'ESports';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success', timeout: 5000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username : {{user.username}}</li>\n    <li class=\"list-group-item\">Email : {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n   font-family: Monda;\n   font-style: normal;\n   font-weight: normal;\n   line-height: 20px;\n   font-size: 30px;\n   text-align: center;\n   letter-spacing: 0.04em;\n}\n\np {\n   font-family: Monda;\n   line-height: 16px;\n   font-size: 40px;\n   letter-spacing: 0.04em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csa0JBQWtCO0dBQ2xCLGtCQUFrQjtHQUNsQixtQkFBbUI7R0FDbkIsaUJBQWlCO0dBQ2pCLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsc0JBQXNCO0FBQ3pCOztBQUVBO0dBQ0csa0JBQWtCO0dBQ2xCLGlCQUFpQjtHQUNqQixlQUFlO0dBQ2Ysc0JBQXNCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgZm9udC1mYW1pbHk6IE1vbmRhO1xuICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgZm9udC1zaXplOiAzMHB4O1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbn1cblxucCB7XG4gICBmb250LWZhbWlseTogTW9uZGE7XG4gICBsaW5lLWhlaWdodDogMTZweDtcbiAgIGZvbnQtc2l6ZTogNDBweDtcbiAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Enter Name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"Enter Username\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter Email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\" Enter Password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 10000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 10000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        var jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        if (localStorage.id_token == undefined)
            return false;
        return !jwtHelper.isTokenExpired(localStorage.id_token);
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/league.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/league.service.ts ***!
  \********************************************/
/*! exports provided: LeagueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeagueService", function() { return LeagueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LeagueService = /** @class */ (function () {
    function LeagueService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    LeagueService.prototype.getPlayers = function () {
        return this.http.get('https://api.opendota.com/api/proPlayers');
    };
    LeagueService.prototype.getLeagues = function () {
        return this.http.get('https://api.opendota.com/api/leagues');
    };
    LeagueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LeagueService);
    return LeagueService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anthony/Documents/Esports-Senior-Project/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map