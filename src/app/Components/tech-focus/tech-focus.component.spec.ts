import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechFocusComponent } from './tech-focus.component';

describe('TechFocusComponent', () => {
  let component: TechFocusComponent;
  let fixture: ComponentFixture<TechFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechFocusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
