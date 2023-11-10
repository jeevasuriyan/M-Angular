import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynowpageComponent } from './buynowpage.component';

describe('BuynowpageComponent', () => {
  let component: BuynowpageComponent;
  let fixture: ComponentFixture<BuynowpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuynowpageComponent]
    });
    fixture = TestBed.createComponent(BuynowpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
