import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router : Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    router = TestBed.inject(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('go to employee', () => {
    const spy = spyOn(router, 'navigate')
    component.goEmployee()
    expect(spy).toHaveBeenCalledWith(['employee'])
  })

  it('go to project', () => {
    const spy = spyOn(router, 'navigate')
    component.goProject()
    expect(spy).toHaveBeenCalledWith(['project'])
  })
});
