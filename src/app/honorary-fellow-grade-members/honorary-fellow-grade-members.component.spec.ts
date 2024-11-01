import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoraryFellowGradeMembersComponent } from './honorary-fellow-grade-members.component';

describe('HonoraryFellowGradeMembersComponent', () => {
  let component: HonoraryFellowGradeMembersComponent;
  let fixture: ComponentFixture<HonoraryFellowGradeMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonoraryFellowGradeMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonoraryFellowGradeMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
