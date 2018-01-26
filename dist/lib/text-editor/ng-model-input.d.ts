import { EventEmitter, Type, InjectionToken } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const noop: () => void;
export declare class NgModelInputValueAccessor {
    component: any;
    provide: InjectionToken<ControlValueAccessor>;
    useExisting: Type<any>;
    multi: boolean;
    constructor(component: any);
}
export declare class NgModelInput implements ControlValueAccessor {
    ngModel: any;
    ngModelChange: EventEmitter<any>;
    onNgModelChanged: (_: any) => void;
    onNgModelTouched: (_: any) => void;
    ngModelChange$: EventEmitter<any>;
    constructor();
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setNgModel(newVal: any): void;
    writeValue(newVal: any): void;
}
