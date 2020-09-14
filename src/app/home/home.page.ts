import { Component } from '@angular/core';
import { faCoffee, faComment, faShareAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  faCoffee = faCoffee;
  faComment = faComment;
  faShareAlt = faShareAlt;
  faTrash = faTrash;

  constructor() {}

  status = true;
  clickEvent(){
    this.status = !this.status;
  }
}
