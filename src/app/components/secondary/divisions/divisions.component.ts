import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from 'src/app/models/interfaces.model';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-divisions',
  templateUrl: './divisions.component.html',
  styleUrls: ['./divisions.component.scss'],
})
export class DivisionsComponent implements OnInit {
  
  divisions: Division[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getDivisionByID().subscribe((divisions: Division[]) => {
      divisions.map((division) => {
        this.divisions.push(division);
      })
    });
  }
  @HostListener('window:resize', ['$event'])
  handleResizeDivisions(event) {
   console.log(event);
   
  }
}
