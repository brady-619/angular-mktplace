import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BocinasPage } from './bocinas.page';

describe('BocinasPage', () => {
  let component: BocinasPage;
  let fixture: ComponentFixture<BocinasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BocinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
