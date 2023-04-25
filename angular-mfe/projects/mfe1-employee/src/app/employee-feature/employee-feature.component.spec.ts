import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { EmployeeFeatureComponent } from './employee-feature.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('EmployeeFeatureComponent', () => {
  let component: EmployeeFeatureComponent;
  let fixture: ComponentFixture<EmployeeFeatureComponent>;
  let router : Router
  let result : any
  let newInitialState : any
  let employee = [
    {
      id:17,
      firstName:'Kokila',
      lastName:'Sanjeev',
      phone:'7854378976',
      email:'kokila@gmail.com'
    },
    {
      id:15,
      firstName:'Prakash',
      lastName:'Ramasamy',
      phone:'7854378977',
      email:'prakash@gmail.com'
    },
    {
      id:21,
      firstName:'Sathish',
      lastName:'Kandasamy',
      phone:'7954378977',
      email:'sathish@gmail.com'
    },
    {
      id:22,
      firstName:'Pavni',
      lastName:'Amir',
      phone:'7954378777',
      email:'pavni@gmail.com'
    }
  ]

  beforeEach(async () => {
    const initialState = {
      assignedProd : {
        assignedProjects: []
      }
    }
    newInitialState = {
      assignedProd : {
        assignedProjects : of([{
          projectId:110,
          employeeId:1,
          projectDetail : {
            projectName : 'SVS',
            description : 'This is SVS project. This is a angular project.'
          },
          employeeDetail : {
            firstName : 'Sanjeev',
            lastName : 'Gaurav',
            email : 'sanjeev@gmail.com',
            phone : '8976578905'
          }
        }])
      }
    }

    await TestBed.configureTestingModule({
      declarations: [ EmployeeFeatureComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]) ],
       providers: [provideMockStore({initialState: newInitialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFeatureComponent);
    router = TestBed.inject(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to add employee page', () => {
    const spy = spyOn(router, 'navigate');
    component.addEmployee();
    console.log('spy', spy);
    expect(spy).toHaveBeenCalledWith(['/employee/add'])
  })

  it('search', () => {
    const searchInput = 'koki'
    component.employeeList = of(employee);
    component.changing(searchInput, 'firstName');
    component.employees.subscribe(data => {
      result = data
    })
    expect(result).toEqual([{
      id:17,
      firstName:'Kokila',
      lastName:'Sanjeev',
      phone:'7854378976',
      email:'kokila@gmail.com'
    }])
  })

  it('search without value presents all employees', () => {
    const searchInput = ''
    component.employeeList = of(employee);
    component.changing(searchInput, 'firstName');
    component.employees.subscribe(data => {
      result = data
    })
    expect(result.length).toBe(employee.length);
  })

  it('it should log the assigned employees', () => {
    component.assignedEmployees();
    newInitialState.assignedProd.assignedProjects.subscribe((details: any) => {
      console.log('details', details);
      console.log('details222', component.assignedProjectEmployee);
      expect(component.assignedProjectEmployee).toEqual(details);
    })
  })

  it('show all employees', () => {
    component.allEmployees();
    expect(component.showAssignedEmployee).toBeFalsy()
  })

});
