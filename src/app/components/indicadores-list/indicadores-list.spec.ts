import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresList } from './indicadores-list';

describe('IndicadoresList', () => {
  let component: IndicadoresList;
  let fixture: ComponentFixture<IndicadoresList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadoresList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadoresList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
