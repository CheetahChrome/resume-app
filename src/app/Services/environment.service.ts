import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../Interfaces/Config';
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor(private http: HttpClient) {}
  
  public getConfig$(){
    return this.http.get<Config>('/assets/config.json');

  }
}
