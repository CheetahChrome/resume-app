import { Component, OnInit } from '@angular/core';
import { LocalService } from './Services/local/local.service';
import { EnvironmentService } from './Services/environment.service';
import { Config } from './Interfaces/Config';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  title = 'Wegerson-Resume-App';
  // Create variables for the services
  cosmosUrl: string = '';
  cosmosKey: string= '';

  constructor(private local:LocalService, private env: EnvironmentService) {

   }

  public ngOnInit(): void {
    this.local.saveData('name', 'Wegerson');
    this.local.saveData('age', '32');
    this.local.saveData('email', 'Test@Jabberwocky.cloud');

    this.env.getConfig$().subscribe((data: Config) => {
      this.cosmosUrl = data.cosmosUrl;
      this.cosmosKey = data.cosmosKey;
    })    

  }

}
