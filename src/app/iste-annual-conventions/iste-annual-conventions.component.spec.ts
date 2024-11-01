import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsteAnnualConventionsComponent } from './iste-annual-conventions.component';

describe('IsteAnnualConventionsComponent', () => {
  let component: IsteAnnualConventionsComponent;
  let fixture: ComponentFixture<IsteAnnualConventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsteAnnualConventionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsteAnnualConventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
