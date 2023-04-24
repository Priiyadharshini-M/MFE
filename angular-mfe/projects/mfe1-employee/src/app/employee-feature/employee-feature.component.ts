import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-feature',
  templateUrl: './employee-feature.component.html',
  styleUrls: ['./employee-feature.component.css'],
})

export class EmployeeFeatureComponent implements OnInit {
  employees!: Observable<any>;
  employeeList!: Observable<any>;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.employeeList = this.employees;
  }

  changing(value: any, selectedvalue: any) {
    console.log('selected value', selectedvalue);
    this.employees = !value ? this.employeeList: this.employeeList.pipe(
          map((employees: any[]) => {return employees.filter((emp: any) =>
              emp[selectedvalue].toString().toLowerCase().includes(value)
          )}));
  }

  addEmployee() {
    this.router.navigate(['/employee/add']);
  }
}
