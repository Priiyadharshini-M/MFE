import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, inject } from '@angular/core/testing';
import { ProjectFeatureService } from './project-feature.service';

describe('ProjectFeatureService', () => {
  let service: ProjectFeatureService;
  let httpTestingController : HttpTestingController;
  let projects : any
  let assignedProjects : any
  let baseUrl = "http://localhost:4000/"

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(ProjectFeatureService);
    httpTestingController = TestBed.get(HttpTestingController);
    projects = {
      id:401,
      projectName:"Electonics",
      description: "This is the project related to electronics.."
    },
    assignedProjects = {
      projectId: 401,
      employeeId: 12,
      id:10
    }
  });
  beforeEach(inject(
    [ProjectFeatureService],
    (service : ProjectFeatureService) => {
      service = service
    }
  ))

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get all projects', () => {
    let result:any;
    service.getProjects().subscribe(data => {
      result = data
    })
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl+'project'
    })
    console.log('projects', projects);
    req.flush([projects]);
    expect(result[0]).toEqual(projects);
  })
  it("add new project", () => {
    service.addNewProject(projects).subscribe();
    const req = httpTestingController.expectOne({
      method: "POST",
      url: baseUrl+'project'
    });    
    expect(req.request.body).toEqual(projects);
  });

  it('get all assigned projects', () => {
    let result:any;
    service.getAssignedProjects().subscribe(data => {
      result = data
    })
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl+'assignedProjects'
    })
    console.log('assignedProjects', assignedProjects);
    req.flush([assignedProjects]);
    expect(result[0]).toEqual(assignedProjects);
  })
});
