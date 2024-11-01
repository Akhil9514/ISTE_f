import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMembershipAcademicRecordsComponent } from './student-membership-academic-records.component';

describe('StudentMembershipAcademicRecordsComponent', () => {
  let component: StudentMembershipAcademicRecordsComponent;
  let fixture: ComponentFixture<StudentMembershipAcademicRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMembershipAcademicRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMembershipAcademicRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
