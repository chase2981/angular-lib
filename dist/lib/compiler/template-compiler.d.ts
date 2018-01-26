import { ComponentRef, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CompiledResultModel } from './compiled-result.model';
import { Compiler } from './compiler';
import { DynamicTypeBuilder, DynamicComponent } from './dynamic-type.builder';
export declare class TemplateCompiler implements Compiler {
    protected http: Http;
    protected typeBuilder: DynamicTypeBuilder;
    protected componentRef: ComponentRef<DynamicComponent>;
    constructor(http: Http, typeBuilder: DynamicTypeBuilder);
    compile(url: string, model: any, target: ViewContainerRef, additionalImports?: any[]): Observable<CompiledResultModel>;
}
