import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishStudentChapterComponent } from './establish-student-chapter.component';

describe('EstablishStudentChapterComponent', () => {
  let component: EstablishStudentChapterComponent;
  let fixture: ComponentFixture<EstablishStudentChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstablishStudentChapterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishStudentChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
