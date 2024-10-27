import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsteSpecialIssueComponent } from './iste-special-issue.component';

describe('IsteSpecialIssueComponent', () => {
  let component: IsteSpecialIssueComponent;
  let fixture: ComponentFixture<IsteSpecialIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsteSpecialIssueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsteSpecialIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
