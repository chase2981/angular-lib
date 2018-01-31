(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./loading-indicator.component", "./loading-indicator.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var loading_indicator_component_1 = require("./loading-indicator.component");
    exports.LoadingIndicatorComponent = loading_indicator_component_1.LoadingIndicatorComponent;
    var loading_indicator_module_1 = require("./loading-indicator.module");
    exports.LoadingIndicatorModule = loading_indicator_module_1.LoadingIndicatorModule;
});
