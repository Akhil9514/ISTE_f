import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalMembershipAcademicRecordsComponent } from './institutional-membership-academic-records.component';

describe('InstitutionalMembershipAcademicRecordsComponent', () => {
  let component: InstitutionalMembershipAcademicRecordsComponent;
  let fixture: ComponentFixture<InstitutionalMembershipAcademicRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionalMembershipAcademicRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionalMembershipAcademicRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
