import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapseNav: Observable<boolean>;
  constructor(private navService: NavigationService) { 
    this.collapseNav = navService.getcollapseNav();
  }

  ngOnInit(): void {
  }

  toggleMenu() {
   this.navService.toggleMenu();
  }

}
