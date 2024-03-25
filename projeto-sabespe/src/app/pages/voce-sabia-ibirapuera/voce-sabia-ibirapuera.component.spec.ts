import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaIbirapueraComponent } from './voce-sabia-ibirapuera.component';

describe('VoceSabiaIbirapueraComponent', () => {
  let component: VoceSabiaIbirapueraComponent;
  let fixture: ComponentFixture<VoceSabiaIbirapueraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaIbirapueraComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaIbirapueraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
