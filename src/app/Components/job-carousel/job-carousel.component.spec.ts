import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCarouselComponent } from './job-carousel.component';

describe('JobCarouselComponent', () => {
  let component: JobCarouselComponent;
  let fixture: ComponentFixture<JobCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
