import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Finalisation } from './finalisation';

describe('Finalisation', () => {
  let component: Finalisation;
  let fixture: ComponentFixture<Finalisation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Finalisation],
    }).compileComponents();

    fixture = TestBed.createComponent(Finalisation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
