import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCentroComponent } from './super-centro.component';

describe('SuperCentroComponent', () => {
  let component: SuperCentroComponent;
  let fixture: ComponentFixture<SuperCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperCentroComponent]
    });
    fixture = TestBed.createComponent(SuperCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
