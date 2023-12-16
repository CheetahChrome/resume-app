import { Component, OnInit } from '@angular/core';
import { Observable, of, from, map } from 'rxjs';
import { Job } from './Interfaces/Company';
import { GetJobsService } from './Services/get-jobs.service';
import { TechStack } from './Interfaces/Company';
import { JobDescription } from './Interfaces/Company';
import { TechFocusComponent } from './Components/tech-focus/tech-focus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Wegerson-Resume-App';
  public checked = false;
  public jobs$: Observable<Job[] | undefined> = of(undefined);
  public techResponsibilities : TechStack[] = [];
  public angularItems$: Observable<JobDescription[] | undefined> = of(undefined);
  public iconUrl = 'assets/images/ng-logo.svg';

  // These words from the enum will be bolded.
  public boldWordsList: string[] = Object.values(TechStack);

  // public boldWordsList: string[] = ['Angular', 'APIM', 'Azure' ];

  constructor(private api:GetJobsService) { } 

  public ngOnInit(): void {
    this.jobs$ = this.api.getAllJobs$();

    this.techResponsibilities = [ TechStack.Angular ];
    // // check if jobs$ is undefined
    // if (this.jobs$ === undefined) {
    //   return;
    // }

    }

}
