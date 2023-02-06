import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificDetailsComponent } from './view-specific-details.component';

describe('ViewSpecificDetailsComponent', () => {
  let component: ViewSpecificDetailsComponent;
  let fixture: ComponentFixture<ViewSpecificDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecificDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSpecificDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
