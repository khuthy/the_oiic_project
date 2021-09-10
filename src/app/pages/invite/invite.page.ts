import { DynamicFormService } from 'src/app/services/dynamic-form/dynamic-form.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})

export class InvitePage implements OnInit {
  config = [
    {
      type: 'textbox',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
    },
    {
      type: 'textarea',
      label: 'Message',
      name: 'message',
      placeholder: 'Enter your name',
    },
    {
      type: 'dropdown',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
    },
    {
      type: 'group',
      label: 'Address',
      name: 'dog',
     /*  options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option', */
      children: [
        {
          type: 'textbox',
          label: 'Favourite dog',
          name: 'spoky',
          placeholder: 'Select an option',
        },
      ]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    },
  ];
  constructor(private dynamicFormService: DynamicFormService) { }

  ngOnInit() {
   
    
  }

  formSubmitted(value) {
    console.log(value);
  }

}
