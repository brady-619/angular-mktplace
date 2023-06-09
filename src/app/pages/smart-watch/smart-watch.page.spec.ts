import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmartWatchPage } from './smart-watch.page';

describe('SmartWatchPage', () => {
  let component: SmartWatchPage;
  let fixture: ComponentFixture<SmartWatchPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SmartWatchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
