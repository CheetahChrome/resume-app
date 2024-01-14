import { Component } from '@angular/core';
import { TechStack, Job } from '../../Interfaces/Company';
import { TechFocusComponent } from '../../Components/tech-focus/tech-focus.component'
import { Observable, of } from 'rxjs';
import { GetJobsService } from '../../Services/get-jobs/get-jobs.service';

@Component({
  selector: 'app-tech-focus-section',
  templateUrl: './tech-focus-section.component.html',
  styleUrls: ['./tech-focus-section.component.css']
})
export class TechFocusSectionComponent {
  public angularIconUrl = 'assets/images/ng-logo.svg';
  public azureIconUrl = 'assets/images/icons8-azure.svg';
  public jobs$: Observable<Job[] | undefined> = of(undefined);  
  public angularTechResponsibilities : TechStack[] = [];
  public azureTechResponsibilities : TechStack[] = [];  

  public angularChecked = false;
  public azureChecked = false;  

  constructor(private api:GetJobsService) { } 

  public ngOnInit(): void {
    this.jobs$ = this.api.getAllJobs$();

    this.angularTechResponsibilities = [ TechStack.Angular ];
    this.azureTechResponsibilities = [ TechStack.Azure ];   
    
    
  }
}
