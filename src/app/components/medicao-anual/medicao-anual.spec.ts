import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaoAnual } from './medicao-anual';

describe('MedicaoAnual', () => {
  let component: MedicaoAnual;
  let fixture: ComponentFixture<MedicaoAnual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicaoAnual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicaoAnual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
