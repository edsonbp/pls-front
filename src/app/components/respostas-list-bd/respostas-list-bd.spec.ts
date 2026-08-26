import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostasListBd } from './respostas-list-bd';

describe('RespostasListBd', () => {
  let component: RespostasListBd;
  let fixture: ComponentFixture<RespostasListBd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespostasListBd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespostasListBd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
