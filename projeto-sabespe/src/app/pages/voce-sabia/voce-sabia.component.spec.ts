import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaComponent } from './voce-sabia.component';

describe('VoceSabiaComponent', () => {
  let component: VoceSabiaComponent;
  let fixture: ComponentFixture<VoceSabiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
