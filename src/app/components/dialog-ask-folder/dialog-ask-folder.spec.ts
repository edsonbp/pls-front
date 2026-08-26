import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAskFolder } from './dialog-ask-folder';

describe('DialogAskFolder', () => {
  let component: DialogAskFolder;
  let fixture: ComponentFixture<DialogAskFolder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAskFolder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAskFolder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
