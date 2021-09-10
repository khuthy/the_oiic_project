import { FormGroupComponent } from './fields/form-group/form-group.component';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { DropdownComponent } from './fields/dropdown/dropdown.component';
import { FormButtonComponent } from './fields/form-button/form-button.component';
import { TextboxComponent } from './fields/textbox/textbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormContentComponent } from './container/dynamic-form-content/dynamic-form-content.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
  declarations: [
      DynamicFieldDirective,
      DynamicFormContentComponent,
      TextboxComponent,
      FormButtonComponent,
      DropdownComponent,
      TextareaComponent,
      FormGroupComponent
    ],
  exports: [
    DynamicFormContentComponent, 
    TextboxComponent,
    FormButtonComponent,
    DropdownComponent,
    TextareaComponent,
    FormGroupComponent],
  entryComponents: [
    TextboxComponent,
    FormButtonComponent,
    DropdownComponent,
    TextareaComponent,
    FormGroupComponent
  ]
})
export class GenericFormModule {}