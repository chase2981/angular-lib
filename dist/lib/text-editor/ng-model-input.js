"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.noop = function () { };
var NgModelInputValueAccessor = (function () {
    function NgModelInputValueAccessor(component) {
        var _this = this;
        this.component = component;
        this.provide = forms_1.NG_VALUE_ACCESSOR;
        this.useExisting = core_1.forwardRef(function () { return _this.component; });
        this.multi = false;
    }
    return NgModelInputValueAccessor;
}());
exports.NgModelInputValueAccessor = NgModelInputValueAccessor;
function NgModelInputValueAccessor_tsickle_Closure_declarations() {
    /** @type {?} */
    NgModelInputValueAccessor.prototype.provide;
    /** @type {?} */
    NgModelInputValueAccessor.prototype.useExisting;
    /** @type {?} */
    NgModelInputValueAccessor.prototype.multi;
    /** @type {?} */
    NgModelInputValueAccessor.prototype.component;
}
var NgModelInput = (function () {
    function NgModelInput() {
        this.ngModelChange = new core_1.EventEmitter();
        this.onNgModelChanged = exports.noop;
        this.onNgModelTouched = exports.noop;
        this.ngModelChange$ = new core_1.EventEmitter();
    }
    //From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    NgModelInput.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onNgModelChanged = fn;
    };
    //From ControlValueAccessor interface
    /**
     * @param {?} fn
     * @return {?}
     */
    NgModelInput.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onNgModelTouched = fn;
    };
    /**
     * @param {?} newVal
     * @return {?}
     */
    NgModelInput.prototype.setNgModel = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        /* write value internally */
        this.writeValue(newVal);
        /* let dual binding provider know you want to change the dual-bound value */
        this.onNgModelChanged(newVal);
    };
    //From ControlValueAccessor interface
    /**
     * @param {?} newVal
     * @return {?}
     */
    NgModelInput.prototype.writeValue = /**
     * @param {?} newVal
     * @return {?}
     */
    function (newVal) {
        this.ngModel = newVal;
        /* emit to one more avenue which is when a sibling component needs to listen to
                    any and all value changes in order to do something, not just the internal ones (i.e. SelectTitleDirective) */
        this.ngModelChange$.emit(newVal);
    };
    NgModelInput.propDecorators = {
        "ngModel": [{ type: core_1.Input },],
        "ngModelChange": [{ type: core_1.Output },],
    };
    return NgModelInput;
}());
exports.NgModelInput = NgModelInput;
function NgModelInput_tsickle_Closure_declarations() {
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NgModelInput.propDecorators;
    /** @type {?} */
    NgModelInput.prototype.ngModel;
    /** @type {?} */
    NgModelInput.prototype.ngModelChange;
    /** @type {?} */
    NgModelInput.prototype.onNgModelChanged;
    /** @type {?} */
    NgModelInput.prototype.onNgModelTouched;
    /** @type {?} */
    NgModelInput.prototype.ngModelChange$;
}
//# sourceMappingURL=ng-model-input.js.map