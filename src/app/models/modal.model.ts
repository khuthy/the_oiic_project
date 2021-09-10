import { AnimationBuilder, NavComponentWithProps } from "@ionic/angular";



export interface ModalOptions<T> {
    component: T;
    componentProps?: NavComponentWithProps<T>;
    presentingElement?: HTMLElement;
    showBackdrop?: boolean;
    backdropDismiss?: boolean;
    cssClass?: string | string[];
    animated?: boolean;
    swipeToClose?: boolean;
  
  
    keyboardClose?: boolean;
    id?: string;
  
    enterAnimation?: AnimationBuilder;
    leaveAnimation?: AnimationBuilder;
  }