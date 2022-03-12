import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent {
   sideNavWidth: Observable<number>;
   
   constructor(private navService: NavigationService) {
      this.sideNavWidth = this.navService.getSideNavWidth();
   }

   
}
