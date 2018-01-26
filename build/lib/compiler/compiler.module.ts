import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CompilerConfig, AotCompiler, JitCompiler, JitSummaryResolver,
     templateJitUrl, ngModuleJitUrl, sharedStylesheetJitUrl, splitClasses, 
     splitNsName, createAotCompiler, createAotUrlResolver, core } from '@angular/compiler';

import { DynamicCompilerModule } from './dynamic-compiler.module';
import { TemplateCompiler } from './template-compiler';
import { DynamicTypeBuilder } from './dynamic-type.builder';


import {Compiler, COMPILER_OPTIONS, CompilerFactory } from '@angular/core';

import {JitCompilerFactory} from '@angular/platform-browser-dynamic';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
    imports: [
        DynamicCompilerModule,
        HttpModule,
    ],
    declarations: [],
    exports: [],
    providers: [
        {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
        {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
        {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]},
        DynamicTypeBuilder,
        TemplateCompiler
    ]
})

export class CompilerModule {
}