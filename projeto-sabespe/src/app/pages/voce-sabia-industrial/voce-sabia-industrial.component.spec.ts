import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaIndustrialComponent } from './voce-sabia-industrial.component';

describe('VoceSabiaIndustrialComponent', () => {
  let component: VoceSabiaIndustrialComponent;
  let fixture: ComponentFixture<VoceSabiaIndustrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaIndustrialComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
