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
        define(["require", "exports", "@angular/core", "./dynamic-compiler.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var dynamic_compiler_module_1 = require("./dynamic-compiler.module");
    var DynamicTypeBuilder = (function () {
        // wee need Dynamic component builder
        function DynamicTypeBuilder(compiler) {
            this.compiler = compiler;
            // this object is singleton - so we can use this as a cache
            this._cacheOfFactories = {};
        }
        DynamicTypeBuilder.prototype.createComponentFactoryByComponent = function (uuid, directiveType) {
            var _this = this;
            var factory = this._cacheOfFactories[uuid];
            if (factory) {
                console.log("Module and Type are returned from cache");
                return new Promise(function (resolve) {
                    resolve(factory);
                });
            }
            var module = this.createComponentModule(directiveType);
            return new Promise(function (resolve) {
                _this.compiler.createCompiler([{
                        useJit: true
                    }])
                    .compileModuleAndAllComponentsAsync(module)
                    .then(function (moduleWithFactories) {
                    factory = moduleWithFactories.componentFactories.filter(function (componentFactory) {
                        return componentFactory.componentType === directiveType;
                    })[0];
                    _this._cacheOfFactories[uuid] = factory;
                    resolve(factory);
                });
            });
        };
        DynamicTypeBuilder.prototype.createComponentFactoryByTemplate = function (template, additionalImports) {
            var _this = this;
            var factory = this._cacheOfFactories[template];
            if (factory) {
                console.log("Module and Type are returned from cache");
                return new Promise(function (resolve) {
                    resolve(factory);
                });
            }
            // unknown template ... let's create a Type for it
            var directiveType = this.createNewComponent(template);
            var module = this.createComponentModule(directiveType, additionalImports);
            return new Promise(function (resolve) {
                _this.compiler.createCompiler([{
                        useJit: true
                    }])
                    .compileModuleAndAllComponentsAsync(module)
                    .then(function (moduleWithFactories) {
                    factory = moduleWithFactories.componentFactories.filter(function (componentFactory) {
                        return componentFactory.componentType === directiveType;
                    })[0];
                    _this._cacheOfFactories[template] = factory;
                    resolve(factory);
                });
            });
        };
        DynamicTypeBuilder.prototype.createNewComponent = function (tmpl) {
            var CustomDynamicComponent = (function () {
                function CustomDynamicComponent() {
                }
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Object)
                ], CustomDynamicComponent.prototype, "model", void 0);
                CustomDynamicComponent = __decorate([
                    core_1.Component({
                        selector: 'dynamic-component',
                        template: tmpl,
                        encapsulation: core_1.ViewEncapsulation.None
                    })
                ], CustomDynamicComponent);
                return CustomDynamicComponent;
            }());
            ;
            // a component for this particular template
            return CustomDynamicComponent;
        };
        DynamicTypeBuilder.prototype.createComponentModule = function (componentType, additionalImports) {
            if (additionalImports === void 0) { additionalImports = []; }
            var imports = [
                dynamic_compiler_module_1.DynamicCompilerModule
            ].concat(additionalImports);
            var RuntimeComponentModule = (function () {
                function RuntimeComponentModule() {
                }
                RuntimeComponentModule = __decorate([
                    core_1.NgModule({
                        imports: imports,
                        declarations: [
                            componentType
                        ],
                        schemas: [
                            core_1.NO_ERRORS_SCHEMA
                        ]
                    })
                ], RuntimeComponentModule);
                return RuntimeComponentModule;
            }());
            // a module for just this Type
            return RuntimeComponentModule;
        };
        DynamicTypeBuilder = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [core_1.CompilerFactory])
        ], DynamicTypeBuilder);
        return DynamicTypeBuilder;
    }());
    exports.DynamicTypeBuilder = DynamicTypeBuilder;
});
