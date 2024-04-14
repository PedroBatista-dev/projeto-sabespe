import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoTCDBOComponent } from './processo-tcdbo.component';

describe('ProcessoTCDBOComponent', () => {
  let component: ProcessoTCDBOComponent;
  let fixture: ComponentFixture<ProcessoTCDBOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoTCDBOComponent]
    });
    fixture = TestBed.createComponent(ProcessoTCDBOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
