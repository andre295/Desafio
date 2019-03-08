import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { gpsPage } from './gps.page';

describe('gpsPage', () => {
  let component: gpsPage;
  let fixture: ComponentFixture<gpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ gpsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(gpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
