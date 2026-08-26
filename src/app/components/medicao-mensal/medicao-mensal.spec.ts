import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicaoMensal } from './medicao-mensal';

describe('MedicaoMensal', () => {
  let component: MedicaoMensal;
  let fixture: ComponentFixture<MedicaoMensal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicaoMensal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicaoMensal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
