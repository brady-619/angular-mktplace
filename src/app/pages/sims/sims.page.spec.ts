import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimsPage } from './sims.page';

describe('SimsPage', () => {
  let component: SimsPage;
  let fixture: ComponentFixture<SimsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SimsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
