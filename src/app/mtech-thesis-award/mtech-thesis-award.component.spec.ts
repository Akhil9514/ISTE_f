import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtechThesisAwardComponent } from './mtech-thesis-award.component';

describe('MtechThesisAwardComponent', () => {
  let component: MtechThesisAwardComponent;
  let fixture: ComponentFixture<MtechThesisAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtechThesisAwardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtechThesisAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
