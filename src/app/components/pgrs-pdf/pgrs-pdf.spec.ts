import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrsPdf } from './pgrs-pdf';

describe('PgrsPdf', () => {
  let component: PgrsPdf;
  let fixture: ComponentFixture<PgrsPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgrsPdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgrsPdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
