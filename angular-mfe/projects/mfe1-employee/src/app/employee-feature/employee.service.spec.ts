import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController : HttpTestingController;
  let employees : any
  let baseUrl = "http://localhost:4000/employee";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([])]
    });
    service = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.get(HttpTestingController);
    employees = {
      id:10,
      firstName: "Raksha",
      lastName: "Latha",
      email: "raksha@gmail.com",
      phone: "9081234567",
      address: "Thirunelveli"
    }
  });

  beforeEach(inject(
    [EmployeeService],
    (service : EmployeeService) => {
      service = service
    }
  ))

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all employees', () => {
    let result:any;
    service.getEmployees().subscribe(data => {
      result = data
    })
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    })
    console.log('employees', employees);
    req.flush([employees]);
    expect(result[0]).toEqual(employees);
  })

  it("add new employee", () => {
    service.addNewEmployee(employees).subscribe();
    const req = httpTestingController.expectOne({
      method: "POST",
      url: baseUrl
    });    
    expect(req.request.body).toEqual(employees);
  });
});
