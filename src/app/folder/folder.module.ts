import { GroupComponent } from './../components/tetiary/form-fields-content/group/group.component';
import { UploadsComponent } from './../components/tetiary/uploads/uploads.component';
import { FormsComponent } from './../components/tetiary/forms/forms.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { FooterComponent } from '../components/primary/footer/footer.component';
import { DivisionsComponent } from '../components/secondary/divisions/divisions.component';
import { NavBarComponent } from '../components/primary/nav-bar/nav-bar.component';
import { TabsComponent } from '../components/secondary/tabs/tabs.component';
import { TabContentComponent } from '../components/secondary/tab-content/tab-content.component';
import { DynamicFormComponent } from '../components/tetiary/dynamic-form/dynamic-form.component';
import { DynamicFormDisplayComponent } from '../components/tetiary/dynamic-form-display/dynamic-form-display.component';
import { SimpleFieldsComponent } from '../components/tetiary/form-fields-content/simple-fields/simple-fields.component';
import { ComplexFieldsComponent } from '../components/tetiary/form-fields-content/complex-fields/complex-fields.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FolderPage, FooterComponent, DivisionsComponent,NavBarComponent, TabsComponent, TabContentComponent, DynamicFormComponent, DynamicFormDisplayComponent, ComplexFieldsComponent, FormsComponent, UploadsComponent, SimpleFieldsComponent, GroupComponent],
  entryComponents: [FooterComponent, DivisionsComponent, NavBarComponent, TabsComponent, TabContentComponent, DynamicFormComponent, DynamicFormDisplayComponent, ComplexFieldsComponent,FormsComponent, UploadsComponent, SimpleFieldsComponent, GroupComponent],
  exports:[FormsComponent]
})
export class FolderPageModule {}
