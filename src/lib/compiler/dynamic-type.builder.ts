import { Component, Compiler, CompilerFactory, CompilerOptions, COMPILER_OPTIONS,
    ComponentFactory, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, Input, Injectable, RenderComponentType, Type, ViewEncapsulation } from '@angular/core';
import { JitCompiler } from '@angular/compiler';

import { DynamicCompilerModule } from './dynamic-compiler.module';

export interface DynamicComponent {
    model: any;
}

@Injectable()
export class DynamicTypeBuilder {

    // wee need Dynamic component builder
    constructor(
        protected compiler: CompilerFactory
    ) { }

    // this object is singleton - so we can use this as a cache
    private _cacheOfFactories: { [templateKey: string]: ComponentFactory<DynamicComponent> } = {};

    public createComponentFactoryByComponent(uuid: string, directiveType: any)
        : Promise<ComponentFactory<DynamicComponent>> {

        let factory = this._cacheOfFactories[uuid];

        if (factory) {
            console.log("Module and Type are returned from cache")

            return new Promise((resolve) => {
                resolve(factory);
            });
        }

        let module = this.createComponentModule(directiveType);

        return new Promise((resolve) => {
            this.compiler.createCompiler([{
                useJit: true
            }])
                .compileModuleAndAllComponentsAsync(module)
                .then((moduleWithFactories) => {
                    factory = moduleWithFactories.componentFactories.filter((componentFactory: ComponentFactory<DynamicComponent>) => {
                        return componentFactory.componentType === directiveType;
                    })[0];

                    this._cacheOfFactories[uuid] = factory;

                    resolve(factory);
                });
        });
    }

    public createComponentFactoryByTemplate(template: string, additionalImports?: any[])
        : Promise<ComponentFactory<DynamicComponent>> {

        let factory = this._cacheOfFactories[template];

        if (factory) {
            console.log("Module and Type are returned from cache")

            return new Promise((resolve) => {
                resolve(factory);
            });
        }

        // unknown template ... let's create a Type for it
        let directiveType = this.createNewComponent(template);
        let module = this.createComponentModule(directiveType, additionalImports);

        return new Promise((resolve) => {
            this.compiler.createCompiler([{
                useJit: true
            }])
                .compileModuleAndAllComponentsAsync(module)
                .then((moduleWithFactories) => {
                    factory = moduleWithFactories.componentFactories.filter((componentFactory: ComponentFactory<DynamicComponent>) => {
                        return componentFactory.componentType === directiveType;
                    })[0];

                    this._cacheOfFactories[template] = factory;

                    resolve(factory);
                });
        });
    }

    protected createNewComponent(tmpl: string): any {
        @Component({
            selector: 'dynamic-component',
            template: tmpl,
            encapsulation: ViewEncapsulation.None
        })
        class CustomDynamicComponent implements DynamicComponent {
            @Input() model: any;
        };
        // a component for this particular template
        return CustomDynamicComponent;
    }

    protected createComponentModule(componentType: any, additionalImports: any[] = []): any {
        let imports = [
          DynamicCompilerModule
        ].concat(additionalImports)
        @NgModule({
            imports: imports,
            declarations: [
                componentType
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        })
        class RuntimeComponentModule {
        }
        // a module for just this Type
        return RuntimeComponentModule;
    }
}
