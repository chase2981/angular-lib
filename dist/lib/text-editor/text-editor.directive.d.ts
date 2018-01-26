/// <reference types="ckeditor" />
import { EventEmitter, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import 'ckeditor';
export declare class TextEditorDirective implements OnInit, AfterViewInit, OnDestroy {
    ngModel: string;
    elem: any;
    options: {};
    change: EventEmitter<string>;
    inline: boolean;
    editor: CKEDITOR.editor;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initInlineEditor(): CKEDITOR.editor;
    initClassicEditor(): CKEDITOR.editor;
    subscribeToChangeEvent(): void;
    writeValue(newVal: any): void;
    ngOnDestroy(): void;
}
