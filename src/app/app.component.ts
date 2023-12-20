import { Component, OnInit } from '@angular/core';
import { LocalService } from './Services/local/local.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  title = 'Wegerson-Resume-App';


  constructor(private local:LocalService) {

   }

  public ngOnInit(): void {
    this.local.saveData('name', 'Wegerson');
    this.local.saveData('age', '32');
    this.local.saveData('email', 'Test@Jabberwocky.cloud');

  }

}
