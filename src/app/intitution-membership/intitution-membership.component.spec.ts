import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntitutionMembershipComponent } from './intitution-membership.component';

describe('IntitutionMembershipComponent', () => {
  let component: IntitutionMembershipComponent;
  let fixture: ComponentFixture<IntitutionMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntitutionMembershipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntitutionMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
