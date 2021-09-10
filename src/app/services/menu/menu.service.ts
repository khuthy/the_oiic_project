import { Menu, Company } from './../../models/interfaces.model';
import { Injectable } from '@angular/core';
import {  of, pipe } from 'rxjs';

/* import xml2js from 'xml2js';   */
import { Division, Tabs, TemplateTab } from 'src/app/models/interfaces.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

 /*  configUrl: string = 'http://localhost/php_setup/api/get_views/views.php/?request=menu'; */
tabID: number;
xmlUrl: string = "http://localhost/xml_reader/reader.php";
menu: Menu[] = [];


//xmlItems: any;
/* Divisions data */



  constructor(private _http: HttpClient) {
    
   }

   private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

getConfig() {
 
  return this._http.get<Menu[]>(this.xmlUrl, {  
    headers: new HttpHeaders()  
      .set('Content-Type', 'text/xml')  
      .append('Access-Control-Allow-Methods', 'GET')  
      .append('Access-Control-Allow-Origin', 'http://localhost/')  
      .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
    responseType: 'json'  
  }).pipe(
    map( result => {return result['link']['link']}),
    catchError(this.handleError)
  )
}

/* 
  loadXML() {  
    this._http.get<Menu>('/assets/menus.xml',  
      {  
        headers: new HttpHeaders()  
          .set('Content-Type', 'text/xml')  
          .append('Access-Control-Allow-Methods', 'GET')  
          .append('Access-Control-Allow-Origin', '*')  
          .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),  
        responseType: 'json'  
      })  
      .subscribe((data) => { 
       // console.log(data);
         
         this.parseXML(data)  
          .then((data) => {  
            
              
              
             this.xmlItems = data;
          });  
      });  
  } */
/*   parseXML(data) {  
    return new Promise(resolve => {  
      var k: string | number,  
        arr = [],  
        parser = new xml2js.Parser(  
          {  
            trim: true,  
            explicitArray: true  
          });  
      parser.parseString(data, function (err, result) {  
        var obj = result.parent.link[0]; 
        
         
         for (k in obj.link) {
         
            
           var item = obj.link[k]; 
          
           arr.push({  
            id: item.$.Text,  
            //  name: item.name[0],  
            // gender: item.gender[0],  
            // mobile: item.mobile[0] 
          });   
        }   
        resolve(arr);  
      });  
    });  
  } 
 */
  /*  getMenuView() {
    return this.http.get<Menu>(this.configUrl);
  }  */
  getTabId() {
    return this.tabID;
  }

  getCompanyDetails() {
    const company =   {companyID: 1, companyName: 'ERF SOLUTIONS', logo: '../assets/oiic/CiiC4.png', slogan: 'Happiness under the pillow.',} as Company;
  
    return of(company)
  }

  getMenuByID() {
    const menu: Menu[] = [
      {menuID: 1, title: 'Reportings', url: 'folder/Inbox', userID: 1, icon_name: 'person',dateCreated: '2020/21/02', selected: true, hasSubMenu: [{submenu: 1, title: 'Invite Members', icon_name: '', url: 'folder/Inbox/InviteMembers'},
      {submenu: 1, icon_name: '',title: 'add employees', url: 'folder/Inbox/InviteMembers'} ]},
      {menuID: 1, title: 'Emails', url: 'folder/emails', userID: 1, icon_name: 'person',dateCreated: '2020/21/02', selected: false, hasSubMenu: [{submenu: 1, title: 'Invite Members', icon_name: '', url: 'invite'},
      {submenu: 1, icon_name: '', url: 'folder/Inbox/InviteMembers'} ]},
      
    ]; 
    return of(menu.sort((a, b) => a.menuID - b.menuID))
  }

  getDivisionByID() {
   const divisions: Division[] = [
      {divID: 1, divName: 'First Div', divPostion: 1,  size:8, submenuID: 1},
      
    ];
    return of(divisions.sort((a, b) => a.divPostion - b.divPostion));
  }


  getTabsByID() {
    const tabs: Tabs[] = [
      { tabID: 1, divID: 1, title: 'Employee',value:'Employee', order: 6},
      { tabID: 2, divID: 1, title: 'Camera', value:'Camera', order: 4},
      { tabID: 3, divID: 2, title: 'Payments', value:'Payments', order: 2},
      { tabID: 4, divID: 1, title: 'Morty', value:'Morty', order: 3},
      { tabID: 5, divID: 1, title: 'Rick', value:'Rick', order: 4},
      { tabID: 6, divID: 1, title: 'Melow', value:'Melow', order: 1},
    
    ];

    return of(tabs.sort((a, b) => a.order - b.order));
  }


  getTabContentByID() {
    const   templateContent: TemplateTab[] = [
      {groupID: 1, tempID: 1, tabID: 1, titleHeader: 'Employee', titleDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti ipsum veritatis eaque expedita eos, sint consequuntur itaque dignissimos dolore, tempore rerum repellendus natus aspernatur voluptatibus? Deleniti modi officia voluptatum.',
      show: true
    },
    {groupID: 2, tempID: 1, tabID: 1, titleHeader: 'Employee', titleDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti ipsum veritatis eaque expedita eos, sint consequuntur itaque dignissimos dolore, tempore rerum repellendus natus aspernatur voluptatibus? Deleniti modi officia voluptatum.',
    show: true
  },
      {groupID: 3, tempID: 2, tabID: 2, titleHeader: 'Camera 1', titleDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti ipsum veritatis eaque expedita eos, sint consequuntur itaque dignissimos dolore, tempore rerum repellendus natus aspernatur voluptatibus? Deleniti modi officia voluptatum.',
      show: false},
      {groupID: 4, tempID: 2, tabID: 2, titleHeader: 'Camera 2', titleDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti ipsum veritatis eaque expedita eos, sint consequuntur itaque dignissimos dolore, tempore rerum repellendus natus aspernatur voluptatibus? Deleniti modi officia voluptatum.',
      show: false},
      {groupID: 5, tempID: 3, tabID: 3, titleHeader: 'Payments', titleDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti ipsum veritatis eaque expedita eos, sint consequuntur itaque dignissimos dolore, tempore rerum repellendus natus aspernatur voluptatibus? Deleniti modi officia voluptatum.',
      show: true},
      {groupID: 6, tempID: 4, tabID: 4, titleHeader: 'Group 1', titleDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti ipsum veritatis eaque expedita eos, sint consequuntur itaque dignissimos dolore, tempore rerum repellendus natus aspernatur voluptatibus? Deleniti modi officia voluptatum.',
      show: true},
      {groupID: 7, tempID: 5, tabID: 5, titleHeader: 'Group 2', titleDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti ipsum veritatis eaque expedita eos, sint consequuntur itaque dignissimos dolore, tempore rerum repellendus natus aspernatur voluptatibus? Deleniti modi officia voluptatum.'},
      {groupID: 8, tempID: 5, tabID: 6, titleHeader: 'Group 2', titleDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti ipsum veritatis eaque expedita eos, sint consequuntur itaque dignissimos dolore, tempore rerum repellendus natus aspernatur voluptatibus? Deleniti modi officia voluptatum.',
      show: true},
   ];
   return of(templateContent.sort((a, b) => a.tempID - b.tempID));
  }





}
