import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcademicProgramsComponent } from './home-academic-programs.component';

describe('HomeAcademicProgramsComponent', () => {
  let component: HomeAcademicProgramsComponent;
  let fixture: ComponentFixture<HomeAcademicProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAcademicProgramsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAcademicProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
