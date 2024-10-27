import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsteExecutiveCouncilMembersComponent } from './iste-executive-council-members.component';

describe('IsteExecutiveCouncilMembersComponent', () => {
  let component: IsteExecutiveCouncilMembersComponent;
  let fixture: ComponentFixture<IsteExecutiveCouncilMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsteExecutiveCouncilMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsteExecutiveCouncilMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
