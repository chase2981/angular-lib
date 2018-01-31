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
        define(["require", "exports", "@angular/core", "@angular/http", "./dynamic-compiler.module", "./template-compiler", "./dynamic-type.builder", "@angular/core", "@angular/platform-browser-dynamic"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var http_1 = require("@angular/http");
    var dynamic_compiler_module_1 = require("./dynamic-compiler.module");
    var template_compiler_1 = require("./template-compiler");
    var dynamic_type_builder_1 = require("./dynamic-type.builder");
    var core_2 = require("@angular/core");
    var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
    function createCompiler(compilerFactory) {
        return compilerFactory.createCompiler();
    }
    exports.createCompiler = createCompiler;
    var CompilerModule = (function () {
        function CompilerModule() {
        }
        CompilerModule = __decorate([
            core_1.NgModule({
                imports: [
                    dynamic_compiler_module_1.DynamicCompilerModule,
                    http_1.HttpModule,
                ],
                declarations: [],
                exports: [],
                providers: [
                    { provide: core_2.COMPILER_OPTIONS, useValue: {}, multi: true },
                    { provide: core_2.CompilerFactory, useClass: platform_browser_dynamic_1.JitCompilerFactory, deps: [core_2.COMPILER_OPTIONS] },
                    { provide: core_2.Compiler, useFactory: createCompiler, deps: [core_2.CompilerFactory] },
                    dynamic_type_builder_1.DynamicTypeBuilder,
                    template_compiler_1.TemplateCompiler
                ]
            })
        ], CompilerModule);
        return CompilerModule;
    }());
    exports.CompilerModule = CompilerModule;
});
