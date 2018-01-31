(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./compiler.module", "./compiled-result.model", "./dynamic-compiler.module", "./dynamic-type.builder", "./template-compiler"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var compiler_module_1 = require("./compiler.module");
    exports.CompilerModule = compiler_module_1.CompilerModule;
    var compiled_result_model_1 = require("./compiled-result.model");
    exports.CompiledResultModel = compiled_result_model_1.CompiledResultModel;
    var dynamic_compiler_module_1 = require("./dynamic-compiler.module");
    exports.DynamicCompilerModule = dynamic_compiler_module_1.DynamicCompilerModule;
    var dynamic_type_builder_1 = require("./dynamic-type.builder");
    exports.DynamicTypeBuilder = dynamic_type_builder_1.DynamicTypeBuilder;
    var template_compiler_1 = require("./template-compiler");
    exports.TemplateCompiler = template_compiler_1.TemplateCompiler;
});
