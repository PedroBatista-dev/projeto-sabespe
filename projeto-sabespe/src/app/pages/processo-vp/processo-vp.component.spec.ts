import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoVPComponent } from './processo-vp.component';

describe('ProcessoVPComponent', () => {
  let component: ProcessoVPComponent;
  let fixture: ComponentFixture<ProcessoVPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoVPComponent]
    });
    fixture = TestBed.createComponent(ProcessoVPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
