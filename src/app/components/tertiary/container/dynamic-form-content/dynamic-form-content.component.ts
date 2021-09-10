
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-dynamic-form-content',
  templateUrl: './dynamic-form-content.component.html',
  styleUrls: ['./dynamic-form-content.component.scss'],
})
export class DynamicFormContentComponent implements OnInit {

  @Input() config: any[] = [];

  @Output() submitted: EventEmitter<string> = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control('')));
    return group;
  }

}
