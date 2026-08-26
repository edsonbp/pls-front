import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cooperativa } from './cooperativa';

describe('Cooperativa', () => {
  let component: Cooperativa;
  let fixture: ComponentFixture<Cooperativa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cooperativa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cooperativa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
