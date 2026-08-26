import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPlsCnj } from './relatorio-pls-cnj';

describe('RelatorioPlsCnj', () => {
  let component: RelatorioPlsCnj;
  let fixture: ComponentFixture<RelatorioPlsCnj>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioPlsCnj]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioPlsCnj);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
