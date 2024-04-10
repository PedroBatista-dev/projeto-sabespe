import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaSPComponent } from './capa-sp.component';

describe('CapaSPComponent', () => {
  let component: CapaSPComponent;
  let fixture: ComponentFixture<CapaSPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaSPComponent]
    });
    fixture = TestBed.createComponent(CapaSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
