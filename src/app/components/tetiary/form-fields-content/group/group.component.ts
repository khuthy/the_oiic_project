import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { FormField } from 'src/app/models/forms.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DynamicFormComponent } from '../../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

  @Input() input: FormField<string>;
  @Input() form: FormGroup = new FormGroup({});
  @Input('controlType') ngSwitch;
  @Output() uploadComponent: EventEmitter<string> = new EventEmitter();
  @Input() filter: number;
  constructor() { }

  ngOnInit() {}

}
