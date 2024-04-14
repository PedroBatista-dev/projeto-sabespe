import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoTCAComponent } from './processo-tca.component';

describe('ProcessoTCAComponent', () => {
  let component: ProcessoTCAComponent;
  let fixture: ComponentFixture<ProcessoTCAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoTCAComponent]
    });
    fixture = TestBed.createComponent(ProcessoTCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
