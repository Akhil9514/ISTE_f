import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsteStudentConventionsComponent } from './iste-student-conventions.component';

describe('IsteStudentConventionsComponent', () => {
  let component: IsteStudentConventionsComponent;
  let fixture: ComponentFixture<IsteStudentConventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsteStudentConventionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsteStudentConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
