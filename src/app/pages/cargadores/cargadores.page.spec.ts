import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargadoresPage } from './cargadores.page';

describe('CargadoresPage', () => {
  let component: CargadoresPage;
  let fixture: ComponentFixture<CargadoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CargadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
