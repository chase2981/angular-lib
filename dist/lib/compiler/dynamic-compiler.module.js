var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "@angular/common", "@angular/forms"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var common_1 = require("@angular/common");
    var forms_1 = require("@angular/forms");
    // export const DYNAMIC_DIRECTIVES = [
    //     forwardRef(() => TelephonoPipe)
    // ];
    var DynamicCompilerModule = (function () {
        function DynamicCompilerModule() {
        }
        DynamicCompilerModule_1 = DynamicCompilerModule;
        DynamicCompilerModule.forRoot = function () {
            return {
                ngModule: DynamicCompilerModule_1,
                providers: [],
            };
        };
        DynamicCompilerModule = DynamicCompilerModule_1 = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ],
                declarations: [],
                exports: [
                    common_1.CommonModule,
                    forms_1.FormsModule
                ]
            })
        ], DynamicCompilerModule);
        return DynamicCompilerModule;
        var DynamicCompilerModule_1;
    }());
    exports.DynamicCompilerModule = DynamicCompilerModule;
});
