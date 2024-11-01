import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateInstitutionalMembershipAcademicRecordsComponent } from './corporate-institutional-membership-academic-records.component';

describe('CorporateInstitutionalMembershipAcademicRecordsComponent', () => {
  let component: CorporateInstitutionalMembershipAcademicRecordsComponent;
  let fixture: ComponentFixture<CorporateInstitutionalMembershipAcademicRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateInstitutionalMembershipAcademicRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateInstitutionalMembershipAcademicRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
