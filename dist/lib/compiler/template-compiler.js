"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var compiled_result_model_1 = require("./compiled-result.model");
var dynamic_type_builder_1 = require("./dynamic-type.builder");
var TemplateCompiler = (function () {
    // @ViewChild('dynamicContentPlaceHolder', { read: ViewContainerRef })
    // protected dynamicComponentTarget: ViewContainerRef;
    function TemplateCompiler(http, typeBuilder) {
        this.http = http;
        this.typeBuilder = typeBuilder;
    }
    /**
     * @param {?} url
     * @param {?=} model
     * @param {?=} target
     * @param {?=} additionalImports
     * @return {?}
     */
    TemplateCompiler.prototype.compile = /**
     * @param {?} url
     * @param {?=} model
     * @param {?=} target
     * @param {?=} additionalImports
     * @return {?}
     */
    function (url, model, target, additionalImports) {
        var _this = this;
        if (model === void 0) { model = {}; }
        return Observable_1.Observable.create(function (observer) {
            var /** @type {?} */ styles;
            _this.http.get(url).map(function (response) { return response.text(); }).subscribe(function (result) {
                styles = result.match(/<style(.+)?>([\s\w\{\}\.\:\;]+)<\/style>/g);
                result = result.replace(/<style(.+)?>([\s\w\{\}\.\:\;]+)<\/style>/g, '');
                _this.typeBuilder.createComponentFactoryByTemplate(result, additionalImports).then(function (factory) {
                    // Target will instantiate and inject component (we'll keep reference to it)
                    // Target will instantiate and inject component (we'll keep reference to it)
                    _this.componentRef = target
                        .createComponent(factory);
                    // let's inject @Inputs to component instance
                    var /** @type {?} */ component = _this.componentRef.instance;
                    component.model = model;
                    _this.componentRef.changeDetectorRef.detectChanges();
                    //let combinedStyles: string = styles.reduce((style) => style);
                    observer.next(new compiled_result_model_1.CompiledResultModel(_this.componentRef, styles));
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                    observer.complete();
                });
            }, function (err) {
                observer.error(err);
                observer.complete();
            });
        });
    };
    TemplateCompiler.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    TemplateCompiler.ctorParameters = function () { return [
        { type: http_1.Http, },
        { type: dynamic_type_builder_1.DynamicTypeBuilder, },
    ]; };
    return TemplateCompiler;
}());
exports.TemplateCompiler = TemplateCompiler;
function TemplateCompiler_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TemplateCompiler.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TemplateCompiler.ctorParameters;
    /** @type {?} */
    TemplateCompiler.prototype.componentRef;
    /** @type {?} */
    TemplateCompiler.prototype.http;
    /** @type {?} */
    TemplateCompiler.prototype.typeBuilder;
}
//# sourceMappingURL=template-compiler.js.map