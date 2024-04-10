import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaSAComponent } from './capa-sa.component';

describe('CapaSAComponent', () => {
  let component: CapaSAComponent;
  let fixture: ComponentFixture<CapaSAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaSAComponent]
    });
    fixture = TestBed.createComponent(CapaSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
