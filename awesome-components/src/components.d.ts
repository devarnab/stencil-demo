/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AcCard {
        "acFooterLink": string;
        "acFooterText": string;
        "acTitle": string;
    }
    interface AcFetchUsers {
    }
    interface AcSpinner {
    }
}
declare global {
    interface HTMLAcCardElement extends Components.AcCard, HTMLStencilElement {
    }
    var HTMLAcCardElement: {
        prototype: HTMLAcCardElement;
        new (): HTMLAcCardElement;
    };
    interface HTMLAcFetchUsersElement extends Components.AcFetchUsers, HTMLStencilElement {
    }
    var HTMLAcFetchUsersElement: {
        prototype: HTMLAcFetchUsersElement;
        new (): HTMLAcFetchUsersElement;
    };
    interface HTMLAcSpinnerElement extends Components.AcSpinner, HTMLStencilElement {
    }
    var HTMLAcSpinnerElement: {
        prototype: HTMLAcSpinnerElement;
        new (): HTMLAcSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "ac-card": HTMLAcCardElement;
        "ac-fetch-users": HTMLAcFetchUsersElement;
        "ac-spinner": HTMLAcSpinnerElement;
    }
}
declare namespace LocalJSX {
    interface AcCard {
        "acFooterLink"?: string;
        "acFooterText"?: string;
        "acTitle"?: string;
    }
    interface AcFetchUsers {
    }
    interface AcSpinner {
    }
    interface IntrinsicElements {
        "ac-card": AcCard;
        "ac-fetch-users": AcFetchUsers;
        "ac-spinner": AcSpinner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ac-card": LocalJSX.AcCard & JSXBase.HTMLAttributes<HTMLAcCardElement>;
            "ac-fetch-users": LocalJSX.AcFetchUsers & JSXBase.HTMLAttributes<HTMLAcFetchUsersElement>;
            "ac-spinner": LocalJSX.AcSpinner & JSXBase.HTMLAttributes<HTMLAcSpinnerElement>;
        }
    }
}
