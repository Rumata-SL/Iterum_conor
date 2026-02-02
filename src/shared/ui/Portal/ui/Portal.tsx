import {ReactNode} from "react";
import {createPortal} from "react-dom";

export interface PortalProps {
    children?: ReactNode;
    elementRef?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        elementRef = document.body,
    } = props;
    return createPortal(children, elementRef);
};