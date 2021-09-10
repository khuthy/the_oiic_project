import { UploadsComponent } from './../uploads/uploads.component';
import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormField } from 'src/app/models/forms.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  @Input() input: FormField<string>;
  @Input() form: FormGroup = new FormGroup({});
  @Input() filter: number;
 constructor(private modalController: ModalController) {

 }

  get isValid() { return this.form.controls[this.input.key].valid; }


   getFormArray(key) : FormArray {
    return <FormArray>this.form.controls[key];
  }

   uploadComponent(index){
   
  }
  
}
   