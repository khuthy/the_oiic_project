import { AnimationBuilder } from '@ionic/angular';



export interface Menu {
    menuID?: number;
    title?: string;
    dateCreated?: string;
    hasSubMenu?: subMenu[];
    userID?: number;
    icon_name?: string;
    url?: string;
    selected?: boolean;

}
export interface Company{
    companyID?: number;
    companyName?: string;
    logo?: string,
    slogan?: string;
}
export interface subMenu {
    submenu?: number;
    title?: string;
    icon_name?: string;
    url?: string;
}
export interface PeriodicElement {
    dimention: any;
    scores: number;
    weight: number;
    symbol: string;
  }

 



export interface Submenu {
    submenuID?: number;
    menuID?: number; //foreign key
    title?: string;
    dateCreated?: string;
    url?: string;
}

export interface Division {
    divID: number;
    submenuID: number; //foreign key
    divPostion: number;
    divName: string;
    size:number;
   
}

export interface Tabs {
    tabID: number;
    divID: number;
    title: string;
    value:string;
    order: number;
}
export interface TemplateTab {
    groupID?: number;
    tempID?: number;
    tabID?: number;
    titleHeader?: string;
    titleDesc?: string;
    show?: boolean;
}

export interface PopoverOptions {
    component: any;
    componentProps?: { [key: string]: any };
    showBackdrop?: boolean;
    backdropDismiss?: boolean;
    translucent?: boolean;
    cssClass?: string | string[];
    event?: Event;
    animated?: boolean;
  
    mode?: 'ios' | 'md';
    keyboardClose?: boolean;
    id?: string;
  
    enterAnimation?: AnimationBuilder;
    leaveAnimation?: AnimationBuilder;
  }