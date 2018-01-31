/* tslint:disable:no-unused-variable */
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
    // import { TextEditorDirective } from './text-editor.directive';
    describe('Directive: TextEditor', function () {
        it('should create an instance', function () {
            //let directive = new TextEditor();
            //expect(directive).toBeTruthy();
        });
    });
});
