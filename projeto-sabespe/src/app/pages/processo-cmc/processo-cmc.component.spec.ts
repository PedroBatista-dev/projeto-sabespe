import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoCMCComponent } from './processo-cmc.component';

describe('ProcessoCMCComponent', () => {
  let component: ProcessoCMCComponent;
  let fixture: ComponentFixture<ProcessoCMCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoCMCComponent]
    });
    fixture = TestBed.createComponent(ProcessoCMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
