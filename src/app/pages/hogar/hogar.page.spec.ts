import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HogarPage } from './hogar.page';

describe('HogarPage', () => {
  let component: HogarPage;
  let fixture: ComponentFixture<HogarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HogarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
