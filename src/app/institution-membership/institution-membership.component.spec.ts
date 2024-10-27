import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionMembershipComponent } from './institution-membership.component';

describe('InstitutionMembershipComponent', () => {
  let component: InstitutionMembershipComponent;
  let fixture: ComponentFixture<InstitutionMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionMembershipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
