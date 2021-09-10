import { SimpleFieldsComponent } from 'src/app/components/tetiary/form-fields-content/simple-fields/simple-fields.component';
import { UploadsComponent } from './../uploads/uploads.component';
import { ModalController } from '@ionic/angular';
import { DynamicFormService } from 'src/app/services/dynamic-form/dynamic-form.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormField } from 'src/app/models/forms.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
form: FormGroup;

@ViewChild(SimpleFieldsComponent) public simpleFieldComponent: SimpleFieldsComponent;

formFields: FormField<string>[] = [];
payLoad = '';
  constructor(private fb: FormBuilder, private dynamicFormService: DynamicFormService, private modalController: ModalController) { 
    this.form = this.fb.group({});
    console.log(this.form);
    
    this.dynamicFormService.getFormFields().subscribe(inputs => {
    
        this.createControl(inputs);
      this.formFields = inputs;
     
      
    })
   
  }

  createControl(inputs: FormField<string>[]) {
    for (let input of inputs) {
      
      
      
      if(input.controlType == 'group') {
        const newGroup = new FormGroup({})
        input.children.map(child => {
         const newControl = new FormControl('');
         newGroup.addControl(child.key, newControl);
        })
        this.form.addControl(input.key, newGroup)
     }
     else if(input.controlType == 'array') {
       const newArray = new FormArray([]);
       const oneGroup = new FormGroup({});
       input.children.map((child, i) => {
         console.log(child.key);
         
          oneGroup.addControl(child.key + i, new FormControl(''));

        /*   if(child.controlType == 'group') {
            const finalGroup = new FormGroup({});
            child.children.map(finalChild => {
              finalGroup.addControl(finalChild.key, new FormControl(''));
            })
            oneGroup.addControl(child.key, finalGroup);
          }
          else if(child.controlType == 'array') {
            const finalArray = new FormArray([]);
            const finalGroup = new FormGroup({});

            child.children.map(finalChild => {
              finalGroup.addControl(finalChild.key, new FormControl(''))
            })
            finalArray.push(finalGroup);
            oneGroup.addControl(child.key, finalArray);
          } */
      
        
       })
       newArray.push(oneGroup);
       this.form.addControl(input.key, newArray);

     }
     const control = new FormControl('');
     this.form.addControl(input.key, control);

     
    }
  }

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


  async uploadComponent(index) {
    const modal = await this.modalController.create({
      component: UploadsComponent,
      cssClass: 'my-custom-class',
      componentProps: {id: index}
    });
    return await modal.present();
  }



onSubmit() {
  this.payLoad = JSON.stringify(this.form.getRawValue());
}
  ngOnInit() {}

}
