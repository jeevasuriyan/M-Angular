import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackItemComponent } from './track-item.component';

describe('TrackItemComponent', () => {
  let component: TrackItemComponent;
  let fixture: ComponentFixture<TrackItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackItemComponent]
    });
    fixture = TestBed.createComponent(TrackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
