import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  isExtend: boolean = true;
  ex: boolean = false;
  h: string = 'py-2';
  h2: string = 'py-4';

  @HostListener('window:scroll') changeHeight() {
    if (scrollY > 60) {
      this.isExtend = false;
    } else {
      this.isExtend = true;
    }
  }
  @HostListener('window:load') changeState() {
    if (scrollY > 60) {
      this.isExtend = false;
    } else {
      this.isExtend = true;
    }
  }
}
