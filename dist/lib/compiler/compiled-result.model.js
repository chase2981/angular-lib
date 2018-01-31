(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CompiledResultModel = (function () {
        function CompiledResultModel(componentRef, styleTags) {
            this.componentRef = componentRef;
            this.styleTags = styleTags;
        }
        Object.defineProperty(CompiledResultModel.prototype, "innerHTML", {
            get: function () {
                return this.componentRef.location.nativeElement.innerHTML;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompiledResultModel.prototype, "outerHTML", {
            get: function () {
                return this.componentRef.location.nativeElement.outerHTML;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CompiledResultModel.prototype, "styles", {
            get: function () {
                if (!this.styleTags || !this.styleTags.length)
                    return '';
                return this.styleTags.reduce(function (style) { return style; });
            },
            enumerable: true,
            configurable: true
        });
        return CompiledResultModel;
    }());
    exports.CompiledResultModel = CompiledResultModel;
});
