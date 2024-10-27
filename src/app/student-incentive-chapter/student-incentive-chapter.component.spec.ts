import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIncentiveChapterComponent } from './student-incentive-chapter.component';

describe('StudentIncentiveChapterComponent', () => {
  let component: StudentIncentiveChapterComponent;
  let fixture: ComponentFixture<StudentIncentiveChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentIncentiveChapterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIncentiveChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
