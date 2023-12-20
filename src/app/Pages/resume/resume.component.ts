import { Component, OnInit } from '@angular/core';
import { Observable, of, from, map } from 'rxjs';
import { Job } from '../../Interfaces/Company';
import { GetJobsService } from '../../Services/get-jobs/get-jobs.service';
import { TechStack } from '../../Interfaces/Company';
import { JobDescription } from '../../Interfaces/Company';
import { TechFocusComponent } from '../../Components/tech-focus/tech-focus.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public checked = false;
  public jobs$: Observable<Job[] | undefined> = of(undefined);
  public techResponsibilities : TechStack[] = [];
  public angularItems$: Observable<JobDescription[] | undefined> = of(undefined);
  public angularIconUrl = 'assets/images/ng-logo.svg';
  //public b2cIconUrl = 'assets/images/b2c.svg';
  public csharIconUrl = 'assets/images/csharp.svg';
  // These words from the enum will be bolded.
  public boldWordsList: string[] = Object.values(TechStack);

  // public boldWordsList: string[] = ['Angular', 'APIM', 'Azure' ];

  constructor(private api:GetJobsService) { } 

  public ngOnInit(): void {
    this.jobs$ = this.api.getAllJobs$();

    this.techResponsibilities = [ TechStack.Angular, TechStack.B2C ];
    // // check if jobs$ is undefined
    // if (this.jobs$ === undefined) {
    //   return;
    // }

    }

}
