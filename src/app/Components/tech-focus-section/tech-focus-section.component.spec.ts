import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechFocusSectionComponent } from './tech-focus-section.component';

describe('TechFocusSectionComponent', () => {
  let component: TechFocusSectionComponent;
  let fixture: ComponentFixture<TechFocusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechFocusSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechFocusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
