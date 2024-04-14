import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoTOUVComponent } from './processo-touv.component';

describe('ProcessoTOUVComponent', () => {
  let component: ProcessoTOUVComponent;
  let fixture: ComponentFixture<ProcessoTOUVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoTOUVComponent]
    });
    fixture = TestBed.createComponent(ProcessoTOUVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
