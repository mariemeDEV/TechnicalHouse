import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logPage : boolean = true;
  admin   : boolean = false;


  showElements(){
    alert("ok");
  }

  fonctionality(){
    alert("operation n");
  }


  redirectTo(){
    this.admin=true;
  }

}


