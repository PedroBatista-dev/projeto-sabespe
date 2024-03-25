import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaOrigemComponent } from './voce-sabia-origem.component';

describe('VoceSabiaOrigemComponent', () => {
  let component: VoceSabiaOrigemComponent;
  let fixture: ComponentFixture<VoceSabiaOrigemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaOrigemComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaOrigemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
