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
        define(["require", "exports", "@angular/core", "@angular/forms"], factory);
    }
})(function (require, exports) {
    "use strict";
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
    var NgModelInput = (function () {
        function NgModelInput() {
            this.ngModelChange = new core_1.EventEmitter();
            this.onNgModelChanged = exports.noop;
            this.onNgModelTouched = exports.noop;
            this.ngModelChange$ = new core_1.EventEmitter();
        }
        //From ControlValueAccessor interface
        NgModelInput.prototype.registerOnChange = function (fn) {
            this.onNgModelChanged = fn;
        };
        //From ControlValueAccessor interface
        NgModelInput.prototype.registerOnTouched = function (fn) {
            this.onNgModelTouched = fn;
        };
        NgModelInput.prototype.setNgModel = function (newVal) {
            /* write value internally */
            this.writeValue(newVal);
            /* let dual binding provider know you want to change the dual-bound value */
            this.onNgModelChanged(newVal);
        };
        //From ControlValueAccessor interface
        NgModelInput.prototype.writeValue = function (newVal) {
            this.ngModel = newVal;
            /* emit to one more avenue which is when a sibling component needs to listen to
                any and all value changes in order to do something, not just the internal ones (i.e. SelectTitleDirective) */
            this.ngModelChange$.emit(newVal);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], NgModelInput.prototype, "ngModel", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", core_1.EventEmitter)
        ], NgModelInput.prototype, "ngModelChange", void 0);
        return NgModelInput;
    }());
    exports.NgModelInput = NgModelInput;
});
