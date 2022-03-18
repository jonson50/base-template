import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
   selector: 'app-side-nav',
   templateUrl: './side-nav.component.html',
   styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, AfterViewInit {
   collapseNav: Observable<boolean>;
   isMobile = false;
   width: number = 300;

   constructor(
      private navService: NavigationService,
      private observer: BreakpointObserver
   ) {
      this.collapseNav = this.navService.getcollapseNav();
   }

   ngOnInit(): void {}

   ngAfterViewInit(): void {
      // throw new Error('Method not implemented.');
      Promise.resolve().then(() => {
         this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
            if (res.matches) {
               // Screen is less than 800px wide (mobile)
               this.isMobile = true;
               this.navService.setcollapseNav(true);
               this.navService.navWidth = 0;
               this.navService.setSideNavWidth(0);
               // console.log('max-width<800px');
            } else {
               // Screen is greater than 800px wide
               this.isMobile = false;
               this.navService.setcollapseNav(false);
               this.navService.navWidth = this.width;
               this.navService.setSideNavWidth(this.width);
               // console.log('max-width>800px');
            }
         });
      });
   }

   getSideNavBarStyle(): any {
      let duration: number = 0.3;
      let navBarStyle: any = {};
      navBarStyle.transition ='left '+duration+'s' ; //, visibility '+duration+'s';
      navBarStyle.width = this.width + 'px';
      navBarStyle.height = '90vh';
      navBarStyle['left'] = `${this.navService.isNavCollapsed() ? -this.width : 0}px`;

      let navBarContainerStyle: any = {};
      navBarContainerStyle.transition =
         'width ' + duration + 's'; //, visibility ' + duration + 's';
      navBarContainerStyle.width = `${ this.navService.isNavCollapsed() ? 0 : this.width }px`;

      return [navBarContainerStyle, navBarStyle];
   }
}
