import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoTCDComponent } from './processo-tcd.component';

describe('ProcessoTCDComponent', () => {
  let component: ProcessoTCDComponent;
  let fixture: ComponentFixture<ProcessoTCDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoTCDComponent]
    });
    fixture = TestBed.createComponent(ProcessoTCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
