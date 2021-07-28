/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComplexProp {
        /**
          * Values prop
         */
        "values": Array<string>;
    }
    interface MyEvent {
        "updateFace": (value: string) => Promise<void>;
    }
    interface MyInput {
        "value": string;
    }
    interface MyInstance {
        /**
          * prop lastName
         */
        "lastName": string;
        /**
          * prop name
         */
        "name": string;
    }
}
declare global {
    interface HTMLMyComplexPropElement extends Components.MyComplexProp, HTMLStencilElement {
    }
    var HTMLMyComplexPropElement: {
        prototype: HTMLMyComplexPropElement;
        new (): HTMLMyComplexPropElement;
    };
    interface HTMLMyEventElement extends Components.MyEvent, HTMLStencilElement {
    }
    var HTMLMyEventElement: {
        prototype: HTMLMyEventElement;
        new (): HTMLMyEventElement;
    };
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLMyInstanceElement extends Components.MyInstance, HTMLStencilElement {
    }
    var HTMLMyInstanceElement: {
        prototype: HTMLMyInstanceElement;
        new (): HTMLMyInstanceElement;
    };
    interface HTMLElementTagNameMap {
        "my-complex-prop": HTMLMyComplexPropElement;
        "my-event": HTMLMyEventElement;
        "my-input": HTMLMyInputElement;
        "my-instance": HTMLMyInstanceElement;
    }
}
declare namespace LocalJSX {
    interface MyComplexProp {
        /**
          * Values prop
         */
        "values"?: Array<string>;
    }
    interface MyEvent {
        "onButtonClicked"?: (event: CustomEvent<boolean>) => void;
    }
    interface MyInput {
        "onInputValueChange"?: (event: CustomEvent<string>) => void;
        "value"?: string;
    }
    interface MyInstance {
        /**
          * prop lastName
         */
        "lastName"?: string;
        /**
          * prop name
         */
        "name"?: string;
    }
    interface IntrinsicElements {
        "my-complex-prop": MyComplexProp;
        "my-event": MyEvent;
        "my-input": MyInput;
        "my-instance": MyInstance;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-complex-prop": LocalJSX.MyComplexProp & JSXBase.HTMLAttributes<HTMLMyComplexPropElement>;
            "my-event": LocalJSX.MyEvent & JSXBase.HTMLAttributes<HTMLMyEventElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "my-instance": LocalJSX.MyInstance & JSXBase.HTMLAttributes<HTMLMyInstanceElement>;
        }
    }
}
