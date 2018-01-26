import { ComponentRef } from '@angular/core';
import { DynamicComponent } from './dynamic-type.builder';
export declare class CompiledResultModel {
    componentRef: ComponentRef<DynamicComponent>;
    private styleTags;
    readonly innerHTML: string;
    readonly outerHTML: string;
    readonly styles: string;
    constructor(componentRef: ComponentRef<DynamicComponent>, styleTags: string[]);
}
