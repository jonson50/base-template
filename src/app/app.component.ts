import { Component, HostListener } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   hideMenu: boolean;
   wideContent: boolean;
   innerWidth: any;
   contador:number = 0;

   constructor() {
      this.hideMenu = false;
      this.wideContent = false;
   }

   ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.setScreen();
  }

   @HostListener('window:resize', ['$event'])
   onResize(event: any) {
      this.innerWidth = window.innerWidth;
      //this.setScreen();
      this.contador++;
   }

   setScreen() {
      if(this.isDesktop()) {
         this.hideMenu = false;
         this.wideContent = false;
      } else {
         this.hideMenu = true;
      }
   }

   isDesktop() {
      return this.innerWidth < 992 ? false : true;
   }

   toggleMenu() {
      this.hideMenu = !this.hideMenu;
      if(this.isDesktop()) this.wideContent = !this.wideContent;
      this.getSideNavBarStyle();
   }

   getSideNavBarStyle(): any {
      let navBarStyle: any = {};
      navBarStyle.transition = 'left ' + '0.4s, visibility 0.4s';
      navBarStyle.width = `300px`;
      navBarStyle['left'] = `${(this.hideMenu ? -300 : 0)}px`;
  
      let navBarContainerStyle: any = {};
      navBarContainerStyle.transition = 'width ' + '0.4s, visibility 0.4s';
      navBarContainerStyle['width'] = `${(this.hideMenu ? 0 : 300)}px`;
      return [navBarContainerStyle, navBarStyle];
    }
}
