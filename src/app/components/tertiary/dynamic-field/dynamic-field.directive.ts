import { FormGroupComponent } from './../fields/form-group/form-group.component';
import { TextareaComponent } from './../fields/textarea/textarea.component';
import { DropdownComponent } from './../fields/dropdown/dropdown.component';
import { TextboxComponent } from './../fields/textbox/textbox.component';
import { FormButtonComponent } from './../fields/form-button/form-button.component';
import { FormGroup } from '@angular/forms';
import { ComponentFactoryResolver, Directive, Input, ViewContainerRef, OnInit } from '@angular/core';

const components = {
  button: FormButtonComponent,
  textbox: TextboxComponent,
  dropdown: DropdownComponent,
  textarea: TextareaComponent,
  group: FormGroupComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit{
  @Input() config;

  @Input() group: FormGroup;
  component;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}



  ngOnInit() {
   
    const component = components[this.config.type];
    
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }


}
