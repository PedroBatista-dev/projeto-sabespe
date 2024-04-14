import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoTRRComponent } from './processo-trr.component';

describe('ProcessoTRRComponent', () => {
  let component: ProcessoTRRComponent;
  let fixture: ComponentFixture<ProcessoTRRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoTRRComponent]
    });
    fixture = TestBed.createComponent(ProcessoTRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
