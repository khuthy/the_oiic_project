import { PopoverComponent } from './components/primary/popover/popover.component';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Menu, Company, Submenu } from './models/interfaces.model';
import { MenuService } from './services/menu/menu.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages:Observable<Menu[]>;
  public companyDetails = {} as Company;
  selected: boolean = false;

  constructor(private menuService: MenuService, private popoverController: PopoverController) {
     
  }
  ngOnInit() {
    this.appPages = this.menuService.getConfig();
    this.getCompanyDetails();  
  }
  buttonClick(){
    console.log('hi');
    
  }

  getCompanyDetails() {
    this.menuService.getCompanyDetails().subscribe(data => {
      
      this.companyDetails.companyID = data.companyID;
      this.companyDetails.companyName = data.companyName;
      this.companyDetails.logo = data.logo;
      this.companyDetails.slogan = data.slogan;
   
  })
  }

  async helpPopOver(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
