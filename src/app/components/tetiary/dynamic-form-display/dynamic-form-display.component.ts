import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from 'src/app/models/forms.model';
import { DynamicFormService } from 'src/app/services/dynamic-form/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form-display',
  templateUrl: './dynamic-form-display.component.html',
  styleUrls: ['./dynamic-form-display.component.scss'],
})
export class DynamicFormDisplayComponent implements OnInit, AfterViewInit {

  @Input() formFields: FormField<string>[] = [];
  form: FormGroup = new FormGroup({});
  @Input('filter') filter: number;
  payLoad = '';

  constructor(private formfieldService: DynamicFormService) { }

  ngOnInit() {
    
  

    this.form = this.formfieldService.toFormGroup(this.formFields, this.filter);
  
  }
  ngAfterViewInit() {
    
     
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
