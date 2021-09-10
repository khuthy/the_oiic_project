import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Division, Tabs, TemplateTab } from 'src/app/models/interfaces.model';
import { MenuService } from 'src/app/services/menu/menu.service';
import { TabContentComponent } from '../tab-content/tab-content.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
@Input('divID') divPostion;

@ViewChild(TabContentComponent) private tabsContentComponent: TabContentComponent;

filteredTabs: Tabs[] = [];

seletedTab: number;

  constructor(private menuService: MenuService) { 
    
  }

  ngOnInit() {
    this.getTabById();
  }
  changeTabs(tabID) {
    this.seletedTab = tabID;
  }
  segmentChanged(ev) {
    this.seletedTab = ev.detail.value;
    //console.log(this.seletedTab, 'terence');
    
    //this.tabsContentComponent.getContentByID(this.seletedTab);
    

  }

  getTabById() {
    
    this.menuService.getTabsByID().subscribe((tabs: Tabs[]) => {
      tabs.map(tab =>  {
        if(tab.divID == this.divPostion) { 
          this.filteredTabs.push(tab);
        }
        
      })
    })  
  }
}
