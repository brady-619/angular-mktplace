import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudifonosBtPage } from './audifonos-bt.page';

describe('AudifonosBtPage', () => {
  let component: AudifonosBtPage;
  let fixture: ComponentFixture<AudifonosBtPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AudifonosBtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
