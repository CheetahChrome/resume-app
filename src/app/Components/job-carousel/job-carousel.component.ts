import { Component, OnInit } from '@angular/core';
import { Observable, of, from, map } from 'rxjs';
import { Job } from '../../Interfaces/Company';
import { GetJobsService } from '../../Services/get-jobs/get-jobs.service';
import { TechStack } from '../../Interfaces/Company';

@Component({
  selector: 'app-job-carousel',
  templateUrl: './job-carousel.component.html',
  styleUrls: ['./job-carousel.component.css']
})
export class JobCarouselComponent {

  public jobs$: Observable<Job[] | undefined> = of(undefined);
  // These words from the enum will be bolded.
  public boldWordsList: string[] = Object.values(TechStack);  

  constructor(private api:GetJobsService) { }

  public ngOnInit(): void {
    this.jobs$ = this.api.getAllJobs$();


    }  

}
