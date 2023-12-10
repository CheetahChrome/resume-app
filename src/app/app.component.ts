import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Job } from './Interfaces/Company';
import { GetJobsService } from './Services/get-jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'resume-app';

  public jobs$: Observable<Job[] | undefined> = of(undefined);

  constructor(private api:GetJobsService) { }


  public ngOnInit(): void {
    this.jobs$ = this.api.getAllJobs$();
  }

}
