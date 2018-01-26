import {
    Directive, Input, Output, ElementRef, EventEmitter, HostBinding, OnInit, AfterViewInit, Renderer2,
    OnDestroy
} from '@angular/core';

import { NgModelInput, NgModelInputValueAccessor } from './ng-model-input';

import 'ckeditor';

@Directive({
    selector: '[rdTextEditor]'
    // providers: [new NgModelInputValueAccessor(TextEditorDirective)]
})
export class TextEditorDirective implements OnInit, AfterViewInit, OnDestroy {
    ngModel: string = null;
    @Input() elem;
    @Input() options: {} = {};
    @Output() change: EventEmitter<string> = new EventEmitter<string>();
    @HostBinding('contentEditable') @Input() inline: boolean = false;

    editor: CKEDITOR.editor;
    // elem: HTMLTextAreaElement;

    /* todo: wire up onNgModelTouched() */
    constructor(/* private elemRef: ElementRef, private renderer: Renderer2 */) {
        // super();
    }

    ngOnInit() {
        // this.elem = this.elementRef.nativeElement;
        CKEDITOR.disableAutoInline = true;
    }

    ngAfterViewInit() {
        this.editor = this.inline ? this.initInlineEditor() : this.initClassicEditor();
        //Updates the <textarea> element that was replaced by the editor with the current data available in the editor.
        this.editor.setData(this.ngModel);
        this.subscribeToChangeEvent();
    }

    initInlineEditor(): CKEDITOR.editor {
        return CKEDITOR.inline(this.elem, this.options);
    }

    initClassicEditor(): CKEDITOR.editor {
        return CKEDITOR.replace(this.elem, this.options);
    }

    subscribeToChangeEvent() {
        this.editor.on('change', () => {
            let newVal = this.editor.getData();
            // this.onNgModelChanged(newVal);
            this.change.emit(newVal);
        });
    }

    /* Override writeValue() of NgModelInput class */
    writeValue(newVal: any) {
        // super.writeValue(newVal);
        if (this.editor)
            this.editor.setData(newVal);
    }

    ngOnDestroy() {
        if (this.editor) {
            this.editor.removeAllListeners();
            //this.editor.destroy();
        }
    }
}
