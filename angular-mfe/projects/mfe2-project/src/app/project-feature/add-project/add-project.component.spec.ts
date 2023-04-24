import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddProjectComponent } from './add-project.component';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate after succesful project submit', async() => {
    const formData = {
      "projectName": "ECE",
      "description": "This is a project related to ECE subject..",
      "projectID":115
    };

    component.projectForm.setValue(formData);
    const spy = spyOn(router, 'navigate');
    component.onSubmit();
    expect(spy).toHaveBeenCalledWith(['project'])
  })
});
