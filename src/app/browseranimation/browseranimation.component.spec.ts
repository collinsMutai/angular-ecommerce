import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseranimationComponent } from './browseranimation.component';

describe('BrowseranimationComponent', () => {
  let component: BrowseranimationComponent;
  let fixture: ComponentFixture<BrowseranimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseranimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseranimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
