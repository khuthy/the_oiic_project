import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
})
export class FormButtonComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {}

}
