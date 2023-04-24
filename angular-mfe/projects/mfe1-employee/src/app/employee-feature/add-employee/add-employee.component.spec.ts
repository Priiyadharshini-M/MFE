import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AddEmployeeComponent } from './add-employee.component';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      imports : [ HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate after succesful submit', async() => {
    const formData = {
      "employeeID": 22,
      "firstName": "Vijay",
      "lastName": "Antony",
      "email": "vijay@gmail.com",
      "phone": "9823408734",
      "address": "Salem"
    };

    component.employeeForm.setValue(formData);
    const spy = spyOn(router, 'navigate');
    component.onSubmit();
    expect(spy).toHaveBeenCalledWith(['/employee'])
  })

  it('check input value', () => {
    const form: FormGroup = component.employeeForm
    const firstName = form.get('firstName');
    expect(firstName?.valid).toBeFalsy();
    firstName?.setValue('');
    expect(firstName?.hasError('required')).toBeTruthy();
    firstName?.setValue('abijith');
    expect(firstName?.hasError('required')).toBeFalsy()
  })
});
