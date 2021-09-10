import { FormGroup } from '@angular/forms';
import { FormField } from 'src/app/models/forms.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';






@Component({
  selector: 'app-simple-fields',
  templateUrl: './simple-fields.component.html',
  styleUrls: ['./simple-fields.component.scss'],
})
export class SimpleFieldsComponent implements OnInit{

  @Input('controlType') ngSwitch ;
  @Input('input') input: FormField<string>;
  @Input() form: FormGroup = new FormGroup({});;
  @Input() filter: number;
  @Output() uploadComponent: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
   
  }

  
    
  
  uploadFilesFunction(key) {
    // DO SOMETHING
    console.log('Hey')
    this.uploadComponent.emit(key);
  }
 }


