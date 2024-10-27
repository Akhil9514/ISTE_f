import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfFinancingSttpComponent } from './self-financing-sttp.component';

describe('SelfFinancingSttpComponent', () => {
  let component: SelfFinancingSttpComponent;
  let fixture: ComponentFixture<SelfFinancingSttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfFinancingSttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfFinancingSttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
