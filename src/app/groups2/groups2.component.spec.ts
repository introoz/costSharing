/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Groups2Component } from './groups2.component';

describe('Groups2Component', () => {
  let component: Groups2Component;
  let fixture: ComponentFixture<Groups2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Groups2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Groups2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
