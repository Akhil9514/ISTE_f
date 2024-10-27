import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncentivesChapterComponent } from './incentives-chapter.component';

describe('IncentivesChapterComponent', () => {
  let component: IncentivesChapterComponent;
  let fixture: ComponentFixture<IncentivesChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncentivesChapterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncentivesChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
