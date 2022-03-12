import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
   selector: 'app-side-nav',
   templateUrl: './side-nav.component.html',
   styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {
   showSideNav: Observable<boolean>;


   constructor(private navService: NavigationService) {
      this.showSideNav = navService.getShowNav();
      this.navService.setScreenWidth(window.innerWidth);
   }

   ngOnInit(): void {
      // this.innerWidth = window.innerWidth;

      //this.setScreen();
   }

   @HostListener('window:resize', ['$event'])
   onResize(event: any) {
      //this.innerWidth = window.innerWidth;
      this.navService.setScreenWidth(window.innerWidth);
      //this.setScreen();
      //this.contador++;
   }

   getSideNavBarStyle(): any {
      let width: number = 280;
      let duration: number = 0.4;
      let navBarStyle: any = {};
      navBarStyle.transition = 'left ' + duration + 's, visibility' + duration + 's';
      navBarStyle.width = width + 'px';
      navBarStyle['left'] = `${(this.navService.isNavOpen() ? -width : 0)}px`;

      let navBarContainerStyle: any = {};
      navBarContainerStyle.transition = 'width ' + duration + 's, visibility' + duration + 's';
      navBarContainerStyle.width = `${(this.navService.isNavOpen() ? 0 : width)}px`;
      return [navBarContainerStyle, navBarStyle];
    }
}
