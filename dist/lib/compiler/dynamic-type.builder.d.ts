import { CompilerFactory, ComponentFactory } from '@angular/core';
export interface DynamicComponent {
    model: any;
}
export declare class DynamicTypeBuilder {
    protected compiler: CompilerFactory;
    constructor(compiler: CompilerFactory);
    private _cacheOfFactories;
    createComponentFactoryByComponent(uuid: string, directiveType: any): Promise<ComponentFactory<DynamicComponent>>;
    createComponentFactoryByTemplate(template: string, additionalImports?: any[]): Promise<ComponentFactory<DynamicComponent>>;
    protected createNewComponent(tmpl: string): any;
    protected createComponentModule(componentType: any, additionalImports?: any[]): any;
}
