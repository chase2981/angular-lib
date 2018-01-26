"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var DynamicCompilerModule = (function () {
    function DynamicCompilerModule() {
    }
    /**
     * @return {?}
     */
    DynamicCompilerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DynamicCompilerModule,
            providers: [],
        };
    };
    DynamicCompilerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        forms_1.FormsModule
                    ],
                    declarations: [],
                    exports: [
                        common_1.CommonModule,
                        forms_1.FormsModule
                    ]
                },] },
    ];
    /** @nocollapse */
    DynamicCompilerModule.ctorParameters = function () { return []; };
    return DynamicCompilerModule;
}());
exports.DynamicCompilerModule = DynamicCompilerModule;
function DynamicCompilerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DynamicCompilerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DynamicCompilerModule.ctorParameters;
}
//# sourceMappingURL=dynamic-compiler.module.js.map