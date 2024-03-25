import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaMuseuComponent } from './voce-sabia-museu.component';

describe('VoceSabiaMuseuComponent', () => {
  let component: VoceSabiaMuseuComponent;
  let fixture: ComponentFixture<VoceSabiaMuseuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaMuseuComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaMuseuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
