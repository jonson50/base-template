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
      this.setScreen();
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
      this.wideContent = !this.wideContent;
   }
}
