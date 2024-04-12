import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIPRPComponent } from './processo-iprp.component';

describe('ProcessoIPRPComponent', () => {
  let component: ProcessoIPRPComponent;
  let fixture: ComponentFixture<ProcessoIPRPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIPRPComponent]
    });
    fixture = TestBed.createComponent(ProcessoIPRPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
