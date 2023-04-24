import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  public employeeForm !: FormGroup ;
  phonePattern="^[6-9]{1}[0-9]{9}$";
  emailPattern="^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$";

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      employeeID: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      address: [''],
    });
  }

  get employeeID() {return this.employeeForm.get('employeeID')}
  get firstName() { return this.employeeForm.get('firstName')}
  get lastName() {return this.employeeForm.get('lastName')}
  get phone() {return this.employeeForm.get('phone')}
  get email() {return this.employeeForm.get('email')}

  onSubmit() {
    this.employeeService.addNewEmployee(this.employeeForm.value).subscribe(res =>{
      console.log("res",res);
    })
     this.router.navigate(['/employee'])
  }
}
