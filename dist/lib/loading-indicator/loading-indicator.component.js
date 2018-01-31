var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var LoadingIndicatorComponent = (function () {
        function LoadingIndicatorComponent() {
            this.height = 75;
            this.width = 75;
            this.src = "https://assets.listia.com/photos/906aea0f142d9ba040d5/original.jpg?s=320x320m&sig=7ccd9e662afed4e3&ts=1376259719";
        }
        LoadingIndicatorComponent.prototype.ngOnInit = function () {
            //console.log('**** loading-indicator init() ****');
        };
        LoadingIndicatorComponent.prototype.ngOnDestroy = function () {
            //console.log('**** loading-indicator destroy() ****');
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], LoadingIndicatorComponent.prototype, "height", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], LoadingIndicatorComponent.prototype, "width", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], LoadingIndicatorComponent.prototype, "src", void 0);
        LoadingIndicatorComponent = __decorate([
            core_1.Component({
                selector: 'rd-loading-indicator',
                template: "\n    <img [src]=\"src\" [height]=\"height\" [width]=\"width\" style=\"margin: auto !important;\" />\n  ",
                styles: ["\n    :host {\n        display: inline-block;\n        background-color: black;\n    }\n  "]
            }),
            __metadata("design:paramtypes", [])
        ], LoadingIndicatorComponent);
        return LoadingIndicatorComponent;
    }());
    exports.LoadingIndicatorComponent = LoadingIndicatorComponent;
});
