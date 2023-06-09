import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PowerBankPage } from './power-bank.page';

describe('PowerBankPage', () => {
  let component: PowerBankPage;
  let fixture: ComponentFixture<PowerBankPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PowerBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
