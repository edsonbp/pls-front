import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespostasList } from './respostas-list';

describe('RespostasList', () => {
  let component: RespostasList;
  let fixture: ComponentFixture<RespostasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespostasList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespostasList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
