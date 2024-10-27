import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePresidentSectionComponent } from './home-president-section.component';

describe('HomePresidentSectionComponent', () => {
  let component: HomePresidentSectionComponent;
  let fixture: ComponentFixture<HomePresidentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePresidentSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePresidentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
