import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { FormField } from 'src/app/models/forms.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-complex-fields',
  templateUrl: './complex-fields.component.html',
  styleUrls: ['./complex-fields.component.scss'],
})
export class ComplexFieldsComponent {

  @Input() input: FormField<string>;
  @Input() form: FormGroup = new FormGroup({});;
  @Input('controlType') ngSwitch;
  @Output() uploadComponent: EventEmitter<string | number> = new EventEmitter();
  @Input() filter: number;
  getFormArray(key) {//err
    return <FormArray>this.form.controls[key];
  } 
  removeArrayGroup(arrayName, index) {
    const control = this.getFormArray(arrayName);
    control.removeAt(index)
  }

addArrayGroup(arrayName, objectSchematiChildren) {
  console.log(arrayName);
  
  const control = this.getFormArray(arrayName);
  const oneGroup = new FormGroup({});
  objectSchematiChildren.map((child, i) => {
    oneGroup.addControl(child.key, new FormControl());
  })
  control.push(oneGroup);
}

}
