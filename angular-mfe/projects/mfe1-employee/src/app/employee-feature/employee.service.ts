import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:4000/';
  constructor(private http : HttpClient) { }
  getEmployees() {
    return this.http.get(this.baseUrl+'employee');
  }
  addNewEmployee(value: any) {
    return this.http.post(this.baseUrl+'employee',value);
  }
}
