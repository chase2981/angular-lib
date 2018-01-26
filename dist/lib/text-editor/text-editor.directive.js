"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("ckeditor");
var TextEditorDirective = (function () {
    // elem: HTMLTextAreaElement;
    /* todo: wire up onNgModelTouched() */
    function TextEditorDirective() {
        // super();
        this.ngModel = null;
        this.options = {};
        this.change = new core_1.EventEmitter();
        this.inline = false;
    }
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this.elem = this.elementRef.nativeElement;
        CKEDITOR.disableAutoInline = true;
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.editor = this.inline ? this.initInlineEditor() : this.initClassicEditor();
        //Updates the <textarea> element that was replaced by the editor with the current data available in the editor.
        this.editor.setData(this.ngModel);
        this.subscribeToChangeEvent();
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.initInlineEditor = /**
     * @return {?}
     */
    function () {
        return CKEDITOR.inline(this.elem, this.options);
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.initClassicEditor = /**
     * @return {?}
     */
    function () {
        return CKEDITOR.replace(this.elem, this.options);
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.subscribeToChangeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.editor.on('change', function () {
            var /** @type {?} */ newVal = _this.editor.getData();
            // this.onNgModelChanged(newVal);
            // this.onNgModelChanged(newVal);
            _this.change.emit(newVal);
        });
    };
    /* Override writeValue() of NgModelInput class */
    /**
     * @param {?} newVal
     * @return {?}
     */
    TextEditorDirective.prototype.writeValue = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        // super.writeValue(newVal);
        if (this.editor)
            this.editor.setData(newVal);
    };
    /**
     * @return {?}
     */
    TextEditorDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.editor) {
            this.editor.removeAllListeners();
            //this.editor.destroy();
        }
    };
    TextEditorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[rdTextEditor]'
                    // providers: [new NgModelInputValueAccessor(TextEditorDirective)]
                },] },
    ];
    /** @nocollapse */
    TextEditorDirective.ctorParameters = function () { return []; };
    TextEditorDirective.propDecorators = {
        "elem": [{ type: core_1.Input },],
        "options": [{ type: core_1.Input },],
        "change": [{ type: core_1.Output },],
        "inline": [{ type: core_1.HostBinding, args: ['contentEditable',] }, { type: core_1.Input },],
    };
    return TextEditorDirective;
}());
exports.TextEditorDirective = TextEditorDirective;
function TextEditorDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TextEditorDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TextEditorDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TextEditorDirective.propDecorators;
    /** @type {?} */
    TextEditorDirective.prototype.ngModel;
    /** @type {?} */
    TextEditorDirective.prototype.elem;
    /** @type {?} */
    TextEditorDirective.prototype.options;
    /** @type {?} */
    TextEditorDirective.prototype.change;
    /** @type {?} */
    TextEditorDirective.prototype.inline;
    /** @type {?} */
    TextEditorDirective.prototype.editor;
}
//# sourceMappingURL=text-editor.directive.js.map