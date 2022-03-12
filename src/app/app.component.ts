import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from './services/navigation.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   innerWidth: any;
   contador:number = 0;
   wideContent: Observable<boolean>;

   constructor(private navService: NavigationService) {
      this.wideContent = this.navService.getWideContent();
   }

   ngOnInit() {
      this.innerWidth = window.innerWidth;
  }


}
