import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from "@ngrx/store/testing";
import { of } from 'rxjs';
import { EmployeeProjectDetailsComponent } from './employee-project-details.component';

describe('EmployeeProjectDetailsComponent', () => {
  let component: EmployeeProjectDetailsComponent;
  let fixture: ComponentFixture<EmployeeProjectDetailsComponent>;
  let newInitialState : any

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
      declarations: [ EmployeeProjectDetailsComponent ],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({initialState : newInitialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should log the assigned projects', () => {
    newInitialState.assignedProd.assignedProjects.subscribe((details: any) => {
      console.log('details', details);
      console.log('details 2', component.assignedProd)
      expect(component.assignedProd).toEqual(details);
    })
  })
});
