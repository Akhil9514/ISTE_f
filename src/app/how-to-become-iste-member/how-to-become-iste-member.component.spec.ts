import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToBecomeIsteMemberComponent } from './how-to-become-iste-member.component';

describe('HowToBecomeIsteMemberComponent', () => {
  let component: HowToBecomeIsteMemberComponent;
  let fixture: ComponentFixture<HowToBecomeIsteMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToBecomeIsteMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToBecomeIsteMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
