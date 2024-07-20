import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvironmentService } from 'src/app/Services/environment.service';
import { Config } from '../../Interfaces/Config';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
public config$:  Observable<Config> | undefined;

// Inject environment.service.ts
  constructor(private env:EnvironmentService) { }

  ngOnInit(): void {
    this.config$ = this.env.getConfig$();
  }

}
