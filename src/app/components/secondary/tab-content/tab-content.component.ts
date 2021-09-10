import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { FormField } from 'src/app/models/forms.model';
import { TemplateTab } from 'src/app/models/interfaces.model';
import { DynamicFormService } from 'src/app/services/dynamic-form/dynamic-form.service';
import { MenuService } from 'src/app/services/menu/menu.service';



@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
})
export class TabContentComponent implements OnInit, OnChanges {
  @Input('selected') selected: number;
  title = 'AngularDynamicForms';
  formFields$: Observable<FormField<any>[]>;
  changeLog: string[] = [];

  hide: boolean = false;

  filteredContent: TemplateTab[]= [];

  constructor(private menuService: MenuService, private service: DynamicFormService) {
    /* Make API call */
    this.formFields$ = this.service.getFormFields();
   }

  ngOnInit() {
 
  }
  ngOnChanges(changes: SimpleChanges) {
   /*  const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  console.log(this.changeLog); */
  setTimeout(() => {
    this.hide = true;
  }, 700);
  this.getContentByID(this.selected);
 this.hide = false;
    
  }
  getContentByID(tid: number) {
    this.filteredContent = [];          //empty an arrray
    this.menuService.getTabContentByID().subscribe((tabContents: TemplateTab[]) => {
      tabContents.map(tabContent => {

        if(tabContent.tabID == tid) {
          this.filteredContent.push(tabContent)
        }
      })
    })  
  }

}
