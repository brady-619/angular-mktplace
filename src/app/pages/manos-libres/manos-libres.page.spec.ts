import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManosLibresPage } from './manos-libres.page';

describe('ManosLibresPage', () => {
  let component: ManosLibresPage;
  let fixture: ComponentFixture<ManosLibresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManosLibresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
