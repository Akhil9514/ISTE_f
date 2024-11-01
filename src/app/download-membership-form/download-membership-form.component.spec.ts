import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadMembershipFormComponent } from './download-membership-form.component';

describe('DownloadMembershipFormComponent', () => {
  let component: DownloadMembershipFormComponent;
  let fixture: ComponentFixture<DownloadMembershipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadMembershipFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadMembershipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
