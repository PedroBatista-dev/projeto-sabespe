import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIORCComponent } from './processo-iorc.component';

describe('ProcessoIORCComponent', () => {
  let component: ProcessoIORCComponent;
  let fixture: ComponentFixture<ProcessoIORCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIORCComponent]
    });
    fixture = TestBed.createComponent(ProcessoIORCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
