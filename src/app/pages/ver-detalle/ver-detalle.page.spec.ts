import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerDetallePage } from './ver-detalle.page';

describe('VerDetallePage', () => {
  let component: VerDetallePage;
  let fixture: ComponentFixture<VerDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
