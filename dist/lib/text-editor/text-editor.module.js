"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var text_editor_directive_1 = require("./text-editor.directive");
var TextEditorModule = (function () {
    function TextEditorModule() {
    }
    TextEditorModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        forms_1.FormsModule,
                        common_1.CommonModule,
                    ],
                    declarations: [
                        text_editor_directive_1.TextEditorDirective,
                    ],
                    exports: [
                        forms_1.FormsModule,
                        text_editor_directive_1.TextEditorDirective,
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    TextEditorModule.ctorParameters = function () { return []; };
    return TextEditorModule;
}());
exports.TextEditorModule = TextEditorModule;
function TextEditorModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TextEditorModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TextEditorModule.ctorParameters;
}
//# sourceMappingURL=text-editor.module.js.map