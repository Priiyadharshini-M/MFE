import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AssignProjectComponent } from './assign-project.component';

describe('AssignProjectComponent', () => {
  let component: AssignProjectComponent;
  let fixture: ComponentFixture<AssignProjectComponent>;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignProjectComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]), ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignProjectComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate after succesful assignment of projects', async() => {
    const formData = {
      "projectId": 22,
      "employeeId": 120
    };

    component.projectAssignForm.setValue(formData);
    const spy = spyOn(router, 'navigate');
    component.onSubmit();
    expect(spy).toHaveBeenCalledWith(['project'])
  })
});
