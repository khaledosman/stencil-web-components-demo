/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  ViewMode,
} from './utils/view-mode.enum';


export namespace Components {

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    'setPotato': (potato: string) => void;
    /**
    * sets view mode
    */
    'setViewMode': (viewMode: ViewMode) => void;
    /**
    * sets visited pois
    */
    'setVisitedPOIs': (pois: { key: boolean; }) => void;
    'todos': Array<{ name: string }>;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    'onButtonClicked'?: (event: CustomEvent) => void;
    'todos'?: Array<{ name: string }>;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
