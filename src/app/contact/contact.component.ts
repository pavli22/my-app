import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  isEmpty: boolean[] = [true, true, true, true];
  showLabel(e: any) {
    console.log(e);
    switch (e.target.value) {
      case '':
        switch (e.target.id) {
          case 'userName':
            this.isEmpty[0] = true;
            break;
          case 'userAge':
            this.isEmpty[1] = true;
            break;
          case 'userEmail':
            this.isEmpty[2] = true;
            break;
          case 'userPass':
            this.isEmpty[3] = true;
            break;
          default:
            break;
        }
        break;
      default:
        switch (e.target.id) {
          case 'userName':
            this.isEmpty[0] = false;
            break;
          case 'userAge':
            this.isEmpty[1] = false;
            break;
          case 'userEmail':
            this.isEmpty[2] = false;
            break;
          case 'userPass':
            this.isEmpty[3] = false;
            break;
          default:
            break;
        }
        break;
    }

    // if (e.target.value != '') {
    //   if (e.target.id == 'userName') {
    //     this.isEmpty[0] = true;
    //   } else if (e.target.id == 'userAge') {
    //     this.isEmpty[1] = true;
    //   } else if (e.target.id == 'userEmail') {
    //     this.isEmpty[2] = true;
    //   } else if (e.target.id == 'userPass') {
    //     this.isEmpty[3] = true;
    //   }
    // } else {
    //   if (e.target.id == 'userName') {
    //     this.isEmpty[0] = false;
    //   } else if (e.target.id == 'userAge') {
    //     this.isEmpty[1] = false;
    //   } else if (e.target.id == 'userEmail') {
    //     this.isEmpty[2] = false;
    //   } else if (e.target.id == 'userPass') {
    //     this.isEmpty[3] = false;
    //   }
    // }
  }
}
