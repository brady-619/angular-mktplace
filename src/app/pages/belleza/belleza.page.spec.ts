import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BellezaPage } from './belleza.page';

describe('BellezaPage', () => {
  let component: BellezaPage;
  let fixture: ComponentFixture<BellezaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BellezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
