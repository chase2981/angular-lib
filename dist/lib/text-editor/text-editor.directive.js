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
        define(["require", "exports", "@angular/core", "ckeditor"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    require("ckeditor");
    var TextEditorDirective = (function () {
        // elem: HTMLTextAreaElement;
        /* todo: wire up onNgModelTouched() */
        function TextEditorDirective() {
            this.ngModel = null;
            this.options = {};
            this.change = new core_1.EventEmitter();
            this.inline = false;
            // super();
        }
        TextEditorDirective.prototype.ngOnInit = function () {
            // this.elem = this.elementRef.nativeElement;
            CKEDITOR.disableAutoInline = true;
        };
        TextEditorDirective.prototype.ngAfterViewInit = function () {
            this.editor = this.inline ? this.initInlineEditor() : this.initClassicEditor();
            //Updates the <textarea> element that was replaced by the editor with the current data available in the editor.
            this.editor.setData(this.ngModel);
            this.subscribeToChangeEvent();
        };
        TextEditorDirective.prototype.initInlineEditor = function () {
            return CKEDITOR.inline(this.elem, this.options);
        };
        TextEditorDirective.prototype.initClassicEditor = function () {
            return CKEDITOR.replace(this.elem, this.options);
        };
        TextEditorDirective.prototype.subscribeToChangeEvent = function () {
            var _this = this;
            this.editor.on('change', function () {
                var newVal = _this.editor.getData();
                // this.onNgModelChanged(newVal);
                _this.change.emit(newVal);
            });
        };
        /* Override writeValue() of NgModelInput class */
        TextEditorDirective.prototype.writeValue = function (newVal) {
            // super.writeValue(newVal);
            if (this.editor)
                this.editor.setData(newVal);
        };
        TextEditorDirective.prototype.ngOnDestroy = function () {
            if (this.editor) {
                this.editor.removeAllListeners();
                //this.editor.destroy();
            }
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], TextEditorDirective.prototype, "elem", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object)
        ], TextEditorDirective.prototype, "options", void 0);
        __decorate([
            core_1.Output(),
            __metadata("design:type", core_1.EventEmitter)
        ], TextEditorDirective.prototype, "change", void 0);
        __decorate([
            core_1.HostBinding('contentEditable'), core_1.Input(),
            __metadata("design:type", Boolean)
        ], TextEditorDirective.prototype, "inline", void 0);
        TextEditorDirective = __decorate([
            core_1.Directive({
                selector: '[rdTextEditor]'
                // providers: [new NgModelInputValueAccessor(TextEditorDirective)]
            }),
            __metadata("design:paramtypes", [])
        ], TextEditorDirective);
        return TextEditorDirective;
    }());
    exports.TextEditorDirective = TextEditorDirective;
});
