import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../../Interfaces/Company';

@Injectable({
  providedIn: 'root'
})
export class GetJobsService {

  constructor(private http:HttpClient) { }

  public getAllJobs$(){
    return this.http.get<Job[]>('/assets/mocks/Companies.json')
  }
}
