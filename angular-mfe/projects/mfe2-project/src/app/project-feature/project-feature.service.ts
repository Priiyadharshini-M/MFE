import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectFeatureService {
  private baseUrl = 'http://localhost:4000/';
  constructor(private http: HttpClient) {};
  getProjects() {
    return this.http.get(this.baseUrl+'project');
  }
  getEmployee() {
    return this.http.get(this.baseUrl+'employee');
  }
  getAssignedProjects() {
    return this.http.get(this.baseUrl+'assignedProjects');
  }
  addNewProject(value: any) {
    console.log('new project value in service', value);
    return this.http.post(this.baseUrl+'project', value);
  }
  assignProjects(value: any) {
    console.log('in service', value);
    return this.http.post(this.baseUrl+'assignedProjects', value);
  }
}
