"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CompiledResultModel = (function () {
    function CompiledResultModel(componentRef, styleTags) {
        this.componentRef = componentRef;
        this.styleTags = styleTags;
    }
    Object.defineProperty(CompiledResultModel.prototype, "innerHTML", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentRef.location.nativeElement.innerHTML;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompiledResultModel.prototype, "outerHTML", {
        get: /**
         * @return {?}
         */
        function () {
            return this.componentRef.location.nativeElement.outerHTML;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompiledResultModel.prototype, "styles", {
        get: /**
         * @return {?}
         */
        function () {
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
function CompiledResultModel_tsickle_Closure_declarations() {
    /** @type {?} */
    CompiledResultModel.prototype.componentRef;
    /** @type {?} */
    CompiledResultModel.prototype.styleTags;
}
//# sourceMappingURL=compiled-result.model.js.map