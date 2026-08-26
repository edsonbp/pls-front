import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPgrs } from './relatorio-pgrs';

describe('RelatorioPgrs', () => {
  let component: RelatorioPgrs;
  let fixture: ComponentFixture<RelatorioPgrs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioPgrs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioPgrs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
