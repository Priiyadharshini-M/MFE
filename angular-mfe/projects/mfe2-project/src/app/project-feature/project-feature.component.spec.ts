import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { ProjectFeatureComponent } from './project-feature.component';
import { of } from 'rxjs';

describe('ProjectFeatureComponent', () => {
  let component: ProjectFeatureComponent;
  let fixture: ComponentFixture<ProjectFeatureComponent>;
  let router : Router

  beforeEach(async () => {
    const initialState = {
      assignedProjects: [
        {
          projectId: 113,
          employeeId: 5,
          id: 9,
          projectDetails: [],
          employeeDetails:[]
        }
      ]
    }

    await TestBed.configureTestingModule({
      declarations: [ ProjectFeatureComponent ],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({initialState})]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFeatureComponent);
    router = TestBed.inject(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('navigate to add project page', () => {
    const spy = spyOn(router, 'navigate');
    component.addProject();
    expect(spy).toHaveBeenCalledWith(['/project/add'])
  })
  it('navigate to assigned project-employee page', () => {
    const spy = spyOn(router, 'navigate');
    component.fullDetails();
    expect(spy).toHaveBeenCalledWith(['/project/employee-project-details'])
  })
  it('navigate to assigning project page', () => {
    const projectId = 101
    const spy = spyOn(router, 'navigate');
    component.assign(projectId);
    expect(spy).toHaveBeenCalledWith(['/project/assign/'+projectId])
  })
  it('should combine projetcs, employees and assigned projects', () => {
    const mockProject = [{
        id: 100,
        projectName: "Savvas",
        description: "This needs WCAG accessibility testing."
    }]
    const mockEmployee = [{
      id: 1,
      firstName: "Priiya",
      lastName: "Dharshini",
      email: "priiya303@gmail.com",
      phone: 7845741761,
      address: "Chennai"
    }]
    const mockAssignedProj = [{
      projectId: 100,
      employeeId: 1,
      id: 6
    }]

    component.projects = of(mockProject);
    component.employees = of(mockEmployee);
    component.assignedProjects = of(mockAssignedProj);

    component.projectEmployeeDetails.subscribe(res => {
      expect(res.length).toBe(mockAssignedProj.length);
      expect(res[0].projectDetail).toEqual(mockProject.find(proj => proj.id === mockAssignedProj[0].projectId));
    expect(res[0].employeeDetail).toEqual(mockEmployee.find(emp => emp.id === mockAssignedProj[0].employeeId));
    })
  })
});
