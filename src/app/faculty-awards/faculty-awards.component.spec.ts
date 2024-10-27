import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAwardsComponent } from './faculty-awards.component';

describe('FacultyAwardsComponent', () => {
  let component: FacultyAwardsComponent;
  let fixture: ComponentFixture<FacultyAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyAwardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
