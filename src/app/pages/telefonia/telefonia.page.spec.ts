import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelefoniaPage } from './telefonia.page';

describe('TelefoniaPage', () => {
  let component: TelefoniaPage;
  let fixture: ComponentFixture<TelefoniaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelefoniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
