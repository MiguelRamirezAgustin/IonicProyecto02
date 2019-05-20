import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosPage } from './otros.page';

describe('OtrosPage', () => {
  let component: OtrosPage;
  let fixture: ComponentFixture<OtrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
