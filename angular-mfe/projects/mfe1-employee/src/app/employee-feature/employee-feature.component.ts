import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeService } from './employee.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-employee-feature',
  templateUrl: './employee-feature.component.html',
  styleUrls: ['./employee-feature.component.css'],
})

export class EmployeeFeatureComponent implements OnInit {
  employees!: Observable<any>;
  employeeList!: Observable<any>;
  assignedProjectEmployee: any;
  showAssignedEmployee : boolean = false

  constructor(private employeeService: EmployeeService, private router: Router, private store: Store<any>) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.employeeList = this.employees;
  }

  changing(value: any, selectedvalue: any) {
    console.log('selected value', selectedvalue);
    console.log('typed value', value);
    this.employees = !value ? this.employeeList: this.employeeList.pipe(
          map((employees: any[]) => {
            console.log('emp', employees);
            return employees.filter((emp: any) =>
              emp[selectedvalue].toString().toLowerCase().includes(value)
          )}));
  }

  addEmployee() {
    this.router.navigate(['/employee/add']);
  }

  assignedEmployees() {
    this.showAssignedEmployee = true
    this.store.select('assignedProd').subscribe(data => {
      data.assignedProjects.subscribe((details: any) => {
        console.log('employee-project-details', details);
        this.assignedProjectEmployee = details;
      });
    })
  }

  allEmployees() {
    this.showAssignedEmployee = false
  }
}
