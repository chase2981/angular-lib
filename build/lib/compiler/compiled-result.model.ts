import { ComponentRef } from '@angular/core';
import { DynamicTypeBuilder, DynamicComponent } from './dynamic-type.builder';

export class CompiledResultModel {

    get innerHTML(): string {
        return this.componentRef.location.nativeElement.innerHTML;
    }

    get outerHTML(): string {
        return this.componentRef.location.nativeElement.outerHTML;
    }

    get styles(): string {
        if(!this.styleTags || !this.styleTags.length)
            return '';
        return this.styleTags.reduce((style) => style);
    }

    constructor(public componentRef: ComponentRef<DynamicComponent>, private styleTags: string[]){

    }


}