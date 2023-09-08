import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  allImgs: string[] = [
    'assets/img/poert1.png',
    'assets/img/port2.png',
    'assets/img/port3.png',
    'assets/img/poert1.png',
    'assets/img/port2.png',
    'assets/img/port3.png',
  ];

  targetImg: string = '';
  isClicked: boolean = false;
  getImg(e: any) {
    if (e.target.className == 'fa-solid fa-plus fa-7x') {
      this.targetImg = e.target.parentElement.nextSibling.getAttribute('src');
    } else {
      this.targetImg = e.target.nextSibling.getAttribute('src');
    }
    this.isClicked = true;
  }
  globalClick(e: any) {
    console.log(e.target.className);
    if (
      e.target.className.includes('target-img') ||
      e.target.className.includes('container')
    ) {
      this.isClicked = false;
    }
  }
}
