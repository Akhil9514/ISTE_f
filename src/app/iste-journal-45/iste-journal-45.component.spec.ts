import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsteJournal45Component } from './iste-journal-45.component';

describe('IsteJournal45Component', () => {
  let component: IsteJournal45Component;
  let fixture: ComponentFixture<IsteJournal45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsteJournal45Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsteJournal45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
