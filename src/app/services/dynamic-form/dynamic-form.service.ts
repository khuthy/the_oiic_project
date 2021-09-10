import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { FormField } from 'src/app/models/forms.model';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  
  toFormGroup(inputs: FormField<string>[], filter:number): FormGroup {
 
 var group: FormGroup = new FormGroup({});

    inputs.forEach(input => {
 
        let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
        switch (input.validator) {
          case "email":
            validator.push(Validators.email);
            break;
          default:
            break;
        }
  
        if(input.controlType == 'group') {
           const newGroup = new FormGroup({})
  
           
           input.children.map(child => {
            const newControl = validator.length > 0 ? new FormControl(child.value || '', validator) : new FormControl(child.value || '');
            newGroup.addControl(child.key, newControl);
  
          /*   if(child.controlType == 'group') {
              console.log('found one');
              const finalGroup = new FormGroup({});
              child.children.map(final => {
                const finalControl = validator.length > 0 ? new FormControl(child.value || '', validator) : new FormControl(child.value || '');
                finalGroup.addControl(child.key, finalControl);
              })
              newGroup.addControl(input.key, finalGroup)
            } */
  
           })
           group.addControl(input.key, newGroup)
        }
        else if(input.controlType == 'array') {
          const newArray = new FormArray([]);
          const oneGroup = new FormGroup({});
          input.children.map((child, i) => {
            oneGroup.addControl(child.key, validator.length > 0 ? new FormControl(child.value || '', validator) : new FormControl(child.value || ''));
  
            
            if(child.controlType == 'group') {
              const finalGroup = new FormGroup({});
              child.children.map(finalChild => {
                finalGroup.addControl(finalChild.key, validator.length > 0 ? new FormControl(child.value || '', validator) : new FormControl(child.value || ''));
              })
              oneGroup.addControl(child.key, finalGroup);
            }
          })
          newArray.push(oneGroup);
          group.addControl(input.key, newArray)
        } else {
          group.addControl(input.key, validator.length > 0 ? new FormControl(input.value || '', validator) : new FormControl(input.value || ''))
        }
      
      
    


    
    });
   
    
    return group;
  }

  getFormFields() {

  

    const inputs: FormField<string>[] = [
      
      new FormField<string>({
        controlType: "textbox",
        groupID: 2,
        key: 'fullName',
        label: 'Full Name',
        required: true,
        order: 5,
        upload: false
      }),
      new FormField<string>({
        controlType: "textarea",
        groupID: 2,
        key: 'record',
        label: 'Dealz',
        required: false,
        order: 5,
        upload: true
      }),
      new FormField<string>({
        controlType: "dropdown",
        groupID: 2,
        key: 'gender',
        label: 'Gender',
        required: true,
        order: 5,
        upload: true,
        options: [{key: 'male', value: 'male'}, {key: 'female', value: 'female'}]
      }),
      new FormField<string>({
        controlType: "array",
        groupID: 2,
        key: 'address',
        upload: true,
        order: 3,
        children: [
          new FormField<string>({
            controlType: "dropdown",
            groupID: 1,
            key: 'gender',
            label: 'Gender',
            required: true,
            order: 5,
            upload: true,
            options: [{key: 'male', value: 'male'}, {key: 'female', value: 'female'}]
          }),
         
          new FormField<string>({
            controlType: "textbox",
            groupID: 1,
            key: 'normal',
            label: 'Street Number',
            required: true,
            placeholder: "Enter your street number",
            order: 1,
            upload: false,
          }
          ),
          new FormField<string>({
            controlType: "textbox",
            groupID: 1,
            key: 'city',
            label: 'City',
            required: true,
            placeholder: "Enter your City",
            order: 5,
            upload: false,
            
          }) 
          ]
      }), 
 
      new FormField<string>({
        controlType: 'array',
        key: 'HR',
        groupID: 1,
        label: 'Human resource',
        required: false,
        order: 2,
        upload: true,
        children: [
         
        new FormField<string>({
          controlType: "textbox",
          groupID: 1,
          key: 'name',
          label: 'Full Name',
          required: true,
          placeholder: "Enter your name",
          order: 5,
          upload: false,
          options: [{key: 'man', value: 'man'}], children: [] , multiple: true, validator: 'sss',
        }
        ),
        new FormField<string>({
          controlType: "textbox",
          groupID: 1,
          key: 'name',
          label: 'Full Name',
          required: true,
          placeholder: "Enter your name",
          order: 5,
          upload: false,
          options: [{key: 'man', value: 'man'}], children: [] , multiple: true, validator: 'sss',
        }) 
        ]
      }), 
      
     new FormField<string>({
        controlType: "array",
        groupID: 1,
        key: 'doctor',
        upload: true,
        order: 3,
        children: [
         
          new FormField<string>({
            controlType: "textbox",
            groupID: 1,
            key: 'name',
            label: 'Full Name',
            required: true,
            placeholder: "Enter your name",
            order: 5,
            upload: false,
            options: [{key: 'man', value: 'man'}], multiple: true, validator: 'sss',
          }
          ),
          new FormField<string>({
            controlType: "textbox",
            groupID: 1,
            key: 'name',
            label: 'Full Name',
            required: true,
            placeholder: "Enter your name",
            order: 5,
            upload: false,
            options: [{key: 'man', value: 'man'}], multiple: true, validator: 'sss',
          }) 
          ]
      }),  
       new FormField<string>({
        controlType: "array",
        groupID: 1,
        key: 'complex',
        upload: false,
        children: [
         
          new FormField<string>({
            controlType: "textbox",
            groupID: 1,
            key: 'name',
            label: 'Full Name',
            required: true,
            placeholder: "Enter your name",
            order: 5,
            upload: false,
            options: [{key: 'man', value: 'man'}], children: [] , multiple: true, validator: 'sss',
          }),
          new FormField<string>({
            controlType: "textarea",
            groupID: 1,
            key: 'message',
            label: 'Message',
            required: true,
            placeholder: "Enter your message",
            order: 5,
            upload: false,
            validator: 'sss',
          }),
          new FormField<string>({
            controlType: "array",
            groupID: 1,
            key: 'gggg',
            label: 'Message',
            order: 5,
            upload: false,
            children: [
         
              new FormField<string>({
                controlType: "textbox",
                groupID: 1,
                key: 'name',
                label: 'Full Name',
                required: true,
                placeholder: "Enter your name",
                order: 5,
                upload: false,
                options: [{key: 'man', value: 'man'}], children: [] , multiple: true, validator: 'sss',
              }),
              new FormField<string>({
                controlType: "textarea",
                groupID: 1,
                key: 'message',
                label: 'Message',
                required: true,
                placeholder: "Enter your message",
                order: 5,
                upload: false,
                validator: 'sss',
              })
             
              ]
           
          })  
          ]
      }), 
      
      new FormField<string>({
        controlType: "group",
        groupID: 1,
        key: 'Address',
        upload: true,
        children: [
          new FormField<string>({
            controlType: "dropdown",
            groupID: 1,
            key: 'name',
            label: 'Full Name',
            required: true,
            placeholder: "Enter your name",
            order: 5,
            upload: false,
            options: [{key: 'man', value: 'man'}]
          }),
          new FormField<string>({
            controlType: "textbox",
            groupID: 1,
            key: 'name',
            label: 'Full Name',
            required: true,
            placeholder: "Enter your name",
            order: 5,
            upload: false
          }),
          new FormField<string>({
            controlType: "textbox",
            groupID: 1,
            key: 'name',
            label: 'Full Name',
            required: true,
            placeholder: "Enter your name",
            order: 5,
            upload: false
          }),
          new FormField<string>({
            controlType: "textbox",
            groupID: 1,
            key: 'name',
            label: 'Full Name',
            required: true,
            placeholder: "Enter your name",
            order: 5,
            upload: false
          }),
          new FormField<string>({
            controlType: "textbox",
            groupID: 1,
            key: 'name',
            label: 'Full Name',
            required: true,
            placeholder: "Enter your name",
            order: 5,
            upload: false
          }),

        ],
        order: 5
      }),

      new FormField<string>({
        controlType: "textbox",
        key: 'email',
        groupID: 1,
        label: 'Email',
        placeholder: 'Enter your email address',
        type: 'email',
        required: true,
        validator: "email",
        order: 2
      }),

      new FormField<string>({
        controlType: "dropdown",
        key: 'country',
        groupID: 1,
        label: 'Country',
        multiple: true,
        upload: true,
        options: [
          {key: 'usa',  value: 'United States of America'},
          {key: 'br',  value: 'Brazil'},
          {key: 'other',   value: 'Other'},
          {key: 'usa',  value: 'United States of America'},
          {key: 'br',  value: 'Brazil'},
          {key: 'other',   value: 'Other'}
        ],
        order: 3
      }),

      new FormField<string>({
        controlType: "checkbox",
        key: 'agree',
        groupID: 1,
        label: 'I accept terms and services',
        type: 'checkbox',
        required: true,
        order: 4
      }),
      

      new FormField<string>({
        controlType: "radio",
        key: 'sex',
        label: 'Sex',
        groupID: 1, 
        type: 'radio',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'}
        ],
        order: 5
      }),

      new FormField<string>({
        controlType: "textarea",
        groupID: 1,
        key: 'message',
        label: 'Mesage',
        type: 'textarea',
        value: 'Example',
        order: 6
      }) 
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }


}
