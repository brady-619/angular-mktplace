import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperaCuentaPage } from './recupera-cuenta.page';

describe('RecuperaCuentaPage', () => {
  let component: RecuperaCuentaPage;
  let fixture: ComponentFixture<RecuperaCuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecuperaCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
