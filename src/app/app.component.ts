import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang hello-world';
  isChecked = true;

  onChange($event: any){
    console.log($event);
  }
}
