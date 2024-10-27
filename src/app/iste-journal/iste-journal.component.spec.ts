import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsteJournalComponent } from './iste-journal.component';

describe('IsteJournalComponent', () => {
  let component: IsteJournalComponent;
  let fixture: ComponentFixture<IsteJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsteJournalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsteJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
