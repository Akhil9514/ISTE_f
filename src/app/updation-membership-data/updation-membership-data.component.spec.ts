import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdationMembershipDataComponent } from './updation-membership-data.component';

describe('UpdationMembershipDataComponent', () => {
  let component: UpdationMembershipDataComponent;
  let fixture: ComponentFixture<UpdationMembershipDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdationMembershipDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdationMembershipDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
