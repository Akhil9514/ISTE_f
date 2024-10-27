import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionChairmenComponent } from './section-chairmen.component';

describe('SectionChairmenComponent', () => {
  let component: SectionChairmenComponent;
  let fixture: ComponentFixture<SectionChairmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionChairmenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionChairmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
