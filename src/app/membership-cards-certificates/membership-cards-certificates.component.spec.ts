import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipCardsCertificatesComponent } from './membership-cards-certificates.component';

describe('MembershipCardsCertificatesComponent', () => {
  let component: MembershipCardsCertificatesComponent;
  let fixture: ComponentFixture<MembershipCardsCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipCardsCertificatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipCardsCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
