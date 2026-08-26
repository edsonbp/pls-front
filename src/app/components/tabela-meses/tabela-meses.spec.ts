import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMeses } from './tabela-meses';

describe('TabelaMeses', () => {
  let component: TabelaMeses;
  let fixture: ComponentFixture<TabelaMeses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaMeses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaMeses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
