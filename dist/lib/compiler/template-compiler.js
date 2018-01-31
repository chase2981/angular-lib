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
        define(["require", "exports", "@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "./compiled-result.model", "./dynamic-type.builder"], factory);
    }
})(function (require, exports) {
    "use strict";
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
        TemplateCompiler.prototype.compile = function (url, model, target, additionalImports) {
            var _this = this;
            if (model === void 0) { model = {}; }
            return Observable_1.Observable.create(function (observer) {
                var styles;
                _this.http.get(url).map(function (response) { return response.text(); }).subscribe(function (result) {
                    styles = result.match(/<style(.+)?>([\s\w\{\}\.\:\;]+)<\/style>/g);
                    result = result.replace(/<style(.+)?>([\s\w\{\}\.\:\;]+)<\/style>/g, '');
                    _this.typeBuilder.createComponentFactoryByTemplate(result, additionalImports).then(function (factory) {
                        // Target will instantiate and inject component (we'll keep reference to it)
                        _this.componentRef = target
                            .createComponent(factory);
                        // let's inject @Inputs to component instance
                        var component = _this.componentRef.instance;
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
        TemplateCompiler = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [http_1.Http, dynamic_type_builder_1.DynamicTypeBuilder])
        ], TemplateCompiler);
        return TemplateCompiler;
    }());
    exports.TemplateCompiler = TemplateCompiler;
});
