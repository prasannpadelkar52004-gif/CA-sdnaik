import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mis } from './mis';

describe('Mis', () => {
  let component: Mis;
  let fixture: ComponentFixture<Mis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mis],
    }).compileComponents();

    fixture = TestBed.createComponent(Mis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
