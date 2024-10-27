import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSecretariesComponent } from './section-secretaries.component';

describe('SectionSecretariesComponent', () => {
  let component: SectionSecretariesComponent;
  let fixture: ComponentFixture<SectionSecretariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSecretariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSecretariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
