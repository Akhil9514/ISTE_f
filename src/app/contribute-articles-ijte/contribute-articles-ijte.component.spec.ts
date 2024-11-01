import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeArticlesIjteComponent } from './contribute-articles-ijte.component';

describe('ContributeArticlesIjteComponent', () => {
  let component: ContributeArticlesIjteComponent;
  let fixture: ComponentFixture<ContributeArticlesIjteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributeArticlesIjteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributeArticlesIjteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
