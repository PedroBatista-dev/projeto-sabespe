import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoTCFLComponent } from './processo-tcfl.component';

describe('ProcessoTCFLComponent', () => {
  let component: ProcessoTCFLComponent;
  let fixture: ComponentFixture<ProcessoTCFLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoTCFLComponent]
    });
    fixture = TestBed.createComponent(ProcessoTCFLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
