(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core/testing", "./loading-indicator.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var testing_1 = require("@angular/core/testing");
    var loading_indicator_component_1 = require("./loading-indicator.component");
    var component;
    var fixture;
    var debugElem;
    var elem;
    describe('Component: LoadingIndicator', function () {
        // simple style
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [loading_indicator_component_1.LoadingIndicatorComponent],
                // Provide a test-double instead
                providers: []
            });
            fixture = testing_1.TestBed.createComponent(loading_indicator_component_1.LoadingIndicatorComponent);
            component = fixture.componentInstance;
        });
        it('should create an instance', function () {
            expect(component).toBeTruthy();
        });
    });
});
