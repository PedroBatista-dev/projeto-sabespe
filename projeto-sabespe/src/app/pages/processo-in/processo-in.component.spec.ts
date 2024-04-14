import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoINComponent } from './processo-in.component';

describe('ProcessoINComponent', () => {
  let component: ProcessoINComponent;
  let fixture: ComponentFixture<ProcessoINComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoINComponent]
    });
    fixture = TestBed.createComponent(ProcessoINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
