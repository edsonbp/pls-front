import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaEcoponto } from './empresa-ecoponto';

describe('EmpresaEcoponto', () => {
  let component: EmpresaEcoponto;
  let fixture: ComponentFixture<EmpresaEcoponto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaEcoponto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaEcoponto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
