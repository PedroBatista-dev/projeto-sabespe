import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaGrafiteComponent } from './voce-sabia-grafite.component';

describe('VoceSabiaGrafiteComponent', () => {
  let component: VoceSabiaGrafiteComponent;
  let fixture: ComponentFixture<VoceSabiaGrafiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaGrafiteComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaGrafiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
