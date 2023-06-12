import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RespaldoPayPalPage } from './respaldo-pay-pal.page';

describe('RespaldoPayPalPage', () => {
  let component: RespaldoPayPalPage;
  let fixture: ComponentFixture<RespaldoPayPalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RespaldoPayPalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
