import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMembershipFeeComponent } from './student-membership-fee.component';

describe('StudentMembershipFeeComponent', () => {
  let component: StudentMembershipFeeComponent;
  let fixture: ComponentFixture<StudentMembershipFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMembershipFeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMembershipFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
