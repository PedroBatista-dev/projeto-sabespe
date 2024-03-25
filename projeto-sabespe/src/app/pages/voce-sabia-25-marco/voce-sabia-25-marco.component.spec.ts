import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabia25MarcoComponent } from './voce-sabia-25-marco.component';

describe('VoceSabia25MarcoComponent', () => {
  let component: VoceSabia25MarcoComponent;
  let fixture: ComponentFixture<VoceSabia25MarcoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabia25MarcoComponent]
    });
    fixture = TestBed.createComponent(VoceSabia25MarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
