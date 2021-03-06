/// <reference types="materialize-css" />
import * as au from "../aurelia";
export declare class MdSelect {
    private bindingEngine;
    private taskQueue;
    constructor(element: Element, bindingEngine: au.BindingEngine, taskQueue: au.TaskQueue);
    instance: M.FormSelect;
    log: au.Logger;
    element: HTMLInputElement;
    labelElement: HTMLLabelElement;
    readonlyDiv: HTMLDivElement;
    disabled: boolean;
    disabledChanged(): void;
    readonly: boolean;
    readonlyChanged(): void;
    triggerBlur: () => void;
    enableOptionObserver: boolean;
    label: string;
    labelChanged(): void;
    showErrortext: boolean;
    inputField: HTMLDivElement;
    optionsMutationObserver: any;
    subscription: au.Disposable;
    attached(): void;
    detached(): void;
    refresh(): void;
    onSelectValueChanged: () => void;
    createMaterialSelect(destroy: any): void;
    observeOptions(attach: any): void;
    open(): void;
    handleFocus: () => void;
    handleBlur: () => void;
    mdUnrenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
    mdRenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
}
