import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerExecutiveSecretariesComponent } from './former-executive-secretaries.component';

describe('FormerExecutiveSecretariesComponent', () => {
  let component: FormerExecutiveSecretariesComponent;
  let fixture: ComponentFixture<FormerExecutiveSecretariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormerExecutiveSecretariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormerExecutiveSecretariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
