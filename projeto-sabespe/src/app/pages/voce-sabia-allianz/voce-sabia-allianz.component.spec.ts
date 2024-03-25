import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaAllianzComponent } from './voce-sabia-allianz.component';

describe('VoceSabiaAllianzComponent', () => {
  let component: VoceSabiaAllianzComponent;
  let fixture: ComponentFixture<VoceSabiaAllianzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaAllianzComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaAllianzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
