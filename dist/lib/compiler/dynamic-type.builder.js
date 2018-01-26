"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_compiler_module_1 = require("./dynamic-compiler.module");
/**
 * @record
 */
function DynamicComponent() { }
exports.DynamicComponent = DynamicComponent;
function DynamicComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DynamicComponent.prototype.model;
}
var DynamicTypeBuilder = (function () {
    // wee need Dynamic component builder
    function DynamicTypeBuilder(compiler) {
        this.compiler = compiler;
        this._cacheOfFactories = {};
    }
    /**
     * @param {?} uuid
     * @param {?} directiveType
     * @return {?}
     */
    DynamicTypeBuilder.prototype.createComponentFactoryByComponent = /**
     * @param {?} uuid
     * @param {?} directiveType
     * @return {?}
     */
    function (uuid, directiveType) {
        var _this = this;
        var /** @type {?} */ factory = this._cacheOfFactories[uuid];
        if (factory) {
            console.log("Module and Type are returned from cache");
            return new Promise(function (resolve) {
                resolve(factory);
            });
        }
        var /** @type {?} */ module = this.createComponentModule(directiveType);
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
    /**
     * @param {?} template
     * @param {?=} additionalImports
     * @return {?}
     */
    DynamicTypeBuilder.prototype.createComponentFactoryByTemplate = /**
     * @param {?} template
     * @param {?=} additionalImports
     * @return {?}
     */
    function (template, additionalImports) {
        var _this = this;
        var /** @type {?} */ factory = this._cacheOfFactories[template];
        if (factory) {
            console.log("Module and Type are returned from cache");
            return new Promise(function (resolve) {
                resolve(factory);
            });
        }
        // unknown template ... let's create a Type for it
        var /** @type {?} */ directiveType = this.createNewComponent(template);
        var /** @type {?} */ module = this.createComponentModule(directiveType, additionalImports);
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
    /**
     * @param {?} tmpl
     * @return {?}
     */
    DynamicTypeBuilder.prototype.createNewComponent = /**
     * @param {?} tmpl
     * @return {?}
     */
    function (tmpl) {
        var CustomDynamicComponent = (function () {
            function CustomDynamicComponent() {
            }
            CustomDynamicComponent.decorators = [
                { type: core_1.Component, args: [{
                            selector: 'dynamic-component',
                            template: tmpl,
                            encapsulation: core_1.ViewEncapsulation.None
                        },] },
            ];
            /** @nocollapse */
            CustomDynamicComponent.ctorParameters = function () { return []; };
            CustomDynamicComponent.propDecorators = {
                "model": [{ type: core_1.Input },],
            };
            return CustomDynamicComponent;
        }());
        function CustomDynamicComponent_tsickle_Closure_declarations() {
            /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
            CustomDynamicComponent.decorators;
            /**
             * @nocollapse
             * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
             */
            CustomDynamicComponent.ctorParameters;
            /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
            CustomDynamicComponent.propDecorators;
            /** @type {?} */
            CustomDynamicComponent.prototype.model;
        }
        ;
        // a component for this particular template
        return CustomDynamicComponent;
    };
    /**
     * @param {?} componentType
     * @param {?=} additionalImports
     * @return {?}
     */
    DynamicTypeBuilder.prototype.createComponentModule = /**
     * @param {?} componentType
     * @param {?=} additionalImports
     * @return {?}
     */
    function (componentType, additionalImports) {
        if (additionalImports === void 0) { additionalImports = []; }
        var /** @type {?} */ imports = [
            dynamic_compiler_module_1.DynamicCompilerModule
        ].concat(additionalImports);
        var RuntimeComponentModule = (function () {
            function RuntimeComponentModule() {
            }
            RuntimeComponentModule.decorators = [
                { type: core_1.NgModule, args: [{
                            imports: imports,
                            declarations: [
                                componentType
                            ],
                            schemas: [
                                core_1.NO_ERRORS_SCHEMA
                            ]
                        },] },
            ];
            /** @nocollapse */
            RuntimeComponentModule.ctorParameters = function () { return []; };
            return RuntimeComponentModule;
        }());
        function RuntimeComponentModule_tsickle_Closure_declarations() {
            /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
            RuntimeComponentModule.decorators;
            /**
             * @nocollapse
             * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
             */
            RuntimeComponentModule.ctorParameters;
        }
        // a module for just this Type
        return RuntimeComponentModule;
    };
    DynamicTypeBuilder.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DynamicTypeBuilder.ctorParameters = function () { return [
        { type: core_1.CompilerFactory, },
    ]; };
    return DynamicTypeBuilder;
}());
exports.DynamicTypeBuilder = DynamicTypeBuilder;
function DynamicTypeBuilder_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DynamicTypeBuilder.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DynamicTypeBuilder.ctorParameters;
    /** @type {?} */
    DynamicTypeBuilder.prototype._cacheOfFactories;
    /** @type {?} */
    DynamicTypeBuilder.prototype.compiler;
}
//# sourceMappingURL=dynamic-type.builder.js.map