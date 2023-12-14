import { Pipe, PipeTransform } from '@angular/core';
import { TechStack } from '.././Interfaces/Company';
import { JobDescription } from '.././Interfaces/Company';
import { Job } from '.././Interfaces/Company';

@Pipe({
  name: 'filterTech'
})
export class FilterTechPipe implements PipeTransform {

  transform(jobs: Job[], techs: TechStack[]): string[] {
    // Your code logic here
    let result :string[] = [];

    let responsibilities : JobDescription[] = jobs.map((job: Job) => job.responsibilities).flat();

    // Find all the JobDescriptions that have at least one match the techs in the techstack
    let filtered : JobDescription[] 
        = responsibilities.filter((responsibility: JobDescription) => responsibility.techstack.some((tech: TechStack) => techs.includes(tech)));

    filtered.forEach((jobDescription: JobDescription) => {
      result.push(jobDescription.responsibilty);
    });

    return result; // Updated code: return an empty array instead of null
  }

}
