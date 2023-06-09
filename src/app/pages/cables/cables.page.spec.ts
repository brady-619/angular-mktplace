import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CablesPage } from './cables.page';

describe('CablesPage', () => {
  let component: CablesPage;
  let fixture: ComponentFixture<CablesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
