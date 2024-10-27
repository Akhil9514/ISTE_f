import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishISTEChapterComponent } from './establish-iste-chapter.component';

describe('EstablishISTEChapterComponent', () => {
  let component: EstablishISTEChapterComponent;
  let fixture: ComponentFixture<EstablishISTEChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstablishISTEChapterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishISTEChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
