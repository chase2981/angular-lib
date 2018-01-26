"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var dynamic_compiler_module_1 = require("./dynamic-compiler.module");
var template_compiler_1 = require("./template-compiler");
var dynamic_type_builder_1 = require("./dynamic-type.builder");
var core_2 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
/**
 * @param {?} compilerFactory
 * @return {?}
 */
function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
exports.createCompiler = createCompiler;
var ɵ0 = {};
exports.ɵ0 = ɵ0;
var CompilerModule = (function () {
    function CompilerModule() {
    }
    CompilerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        dynamic_compiler_module_1.DynamicCompilerModule,
                        http_1.HttpModule,
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        { provide: core_2.COMPILER_OPTIONS, useValue: ɵ0, multi: true },
                        { provide: core_2.CompilerFactory, useClass: platform_browser_dynamic_1.JitCompilerFactory, deps: [core_2.COMPILER_OPTIONS] },
                        { provide: core_2.Compiler, useFactory: createCompiler, deps: [core_2.CompilerFactory] },
                        dynamic_type_builder_1.DynamicTypeBuilder,
                        template_compiler_1.TemplateCompiler
                    ]
                },] },
    ];
    /** @nocollapse */
    CompilerModule.ctorParameters = function () { return []; };
    return CompilerModule;
}());
exports.CompilerModule = CompilerModule;
function CompilerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CompilerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CompilerModule.ctorParameters;
}
//# sourceMappingURL=compiler.module.js.map