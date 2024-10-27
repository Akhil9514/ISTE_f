import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingCommitteeMembersComponent } from './managing-committee-members.component';

describe('ManagingCommitteeMembersComponent', () => {
  let component: ManagingCommitteeMembersComponent;
  let fixture: ComponentFixture<ManagingCommitteeMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagingCommitteeMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagingCommitteeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
