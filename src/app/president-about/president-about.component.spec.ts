import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentAboutComponent } from './president-about.component';

describe('PresidentAboutComponent', () => {
  let component: PresidentAboutComponent;
  let fixture: ComponentFixture<PresidentAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresidentAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresidentAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
