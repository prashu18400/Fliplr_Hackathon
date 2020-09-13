import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainpic1Component } from './mainpic1.component';

describe('Mainpic1Component', () => {
  let component: Mainpic1Component;
  let fixture: ComponentFixture<Mainpic1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mainpic1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainpic1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
