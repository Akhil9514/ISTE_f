import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeTimeMembershipComponent } from './life-time-membership.component';

describe('LifeTimeMembershipComponent', () => {
  let component: LifeTimeMembershipComponent;
  let fixture: ComponentFixture<LifeTimeMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeTimeMembershipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeTimeMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
