import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

   private screenWidth: any;
   private showNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
   private wideContent$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

   constructor() { }

   getShowNav(): Observable<any> {
     return this.showNav$.asObservable();
   }

   getWideContent(): Observable<any> {
      return this.wideContent$.asObservable();
   }

   setShowNav(showHide: boolean) {
     this.showNav$.next(showHide);
   }

   setWideContent(value: boolean) {
      this.wideContent$.next(value);
   }

   setScreenWidth(value:number) {
      this.screenWidth = value;
   }

   toggleNavState() {
     this.showNav$.next(!this.showNav$.value);
   }

   private toggleWideContent() {
      this.wideContent$.next(!this.wideContent$.value);
   }

   isNavOpen():boolean {
     return this.showNav$.value;
   }

   isWideConte():boolean {
      return this.wideContent$.value;
   }

   private setScreen() {
      if(this.isDesktop()) {
         this.setShowNav(false);
         this.setWideContent(false);
      } else {
         this.setShowNav(true);
      }
   }

   private isDesktop() {
      return this.screenWidth < 992 ? false : true;
   }

   toggleMenu() {
      this.toggleNavState();
      if(this.isDesktop()) this.toggleWideContent();
   }

}
