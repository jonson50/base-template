import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

   private collapseNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   private sideNavWidth$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
   isMobile: boolean = false;
   navWidth:number = 0;

   constructor() { }

   getcollapseNav(): Observable<any> {
     return this.collapseNav$.asObservable();
   }

   getSideNavWidth(): Observable<any> {
      return this.sideNavWidth$.asObservable();
   }

   setcollapseNav(showHide: boolean) {
     this.collapseNav$.next(showHide);
   }

   setSideNavWidth(value: number) {
      this.sideNavWidth$.next(value);
   }

   toggleNavState() {
     this.collapseNav$.next(!this.collapseNav$.value);
   }

   isNavCollapsed():boolean {
     return this.collapseNav$.value;
   }

   toggleMenu() {
      this.toggleNavState();
      if(!this.isMobile){
         this.setSideNavWidth(this.isNavCollapsed() ? 0 : this.navWidth);
      }
   }

}
