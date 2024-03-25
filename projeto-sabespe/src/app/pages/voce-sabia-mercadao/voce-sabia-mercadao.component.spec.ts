import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaMercadaoComponent } from './voce-sabia-mercadao.component';

describe('VoceSabiaMercadaoComponent', () => {
  let component: VoceSabiaMercadaoComponent;
  let fixture: ComponentFixture<VoceSabiaMercadaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaMercadaoComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaMercadaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
