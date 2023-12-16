import { Component, Input } from '@angular/core';
import { Job } from '../../Interfaces/Company';
import { TechStack } from '../../Interfaces/Company';
import { Observable, of, from, map } from 'rxjs';

@Component({
  selector: 'app-tech-focus',
  templateUrl: './tech-focus.component.html',
  styleUrls: ['./tech-focus.component.css']
})


export class TechFocusComponent 
{
    @Input() techResponsibilities: TechStack[] = [];
    @Input() jobs$: Observable<Job[] | undefined> = of(undefined);
      // These words from the enum will be bolded.
    protected boldWordsList: string[] = Object.values(TechStack);

    //public techResponsibilities : TechStack[] = [];

    constructor() {   }




}
