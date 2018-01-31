(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./text-editor.directive", "./text-editor.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var text_editor_directive_1 = require("./text-editor.directive");
    exports.TextEditorDirective = text_editor_directive_1.TextEditorDirective;
    var text_editor_module_1 = require("./text-editor.module");
    exports.TextEditorModule = text_editor_module_1.TextEditorModule;
});
