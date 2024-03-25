import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaVilaComponent } from './voce-sabia-vila.component';

describe('VoceSabiaVilaComponent', () => {
  let component: VoceSabiaVilaComponent;
  let fixture: ComponentFixture<VoceSabiaVilaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaVilaComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaVilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
