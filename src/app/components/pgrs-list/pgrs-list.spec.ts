import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgrsList } from './pgrs-list';

describe('PgrsList', () => {
  let component: PgrsList;
  let fixture: ComponentFixture<PgrsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PgrsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgrsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
