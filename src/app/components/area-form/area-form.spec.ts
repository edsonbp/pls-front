import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaForm } from './area-form';

describe('AreaFom', () => {
  let component: AreaForm;
  let fixture: ComponentFixture<AreaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
