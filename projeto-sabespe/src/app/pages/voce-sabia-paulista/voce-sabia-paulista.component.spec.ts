import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaPaulistaComponent } from './voce-sabia-paulista.component';

describe('VoceSabiaPaulistaComponent', () => {
  let component: VoceSabiaPaulistaComponent;
  let fixture: ComponentFixture<VoceSabiaPaulistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaPaulistaComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaPaulistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
