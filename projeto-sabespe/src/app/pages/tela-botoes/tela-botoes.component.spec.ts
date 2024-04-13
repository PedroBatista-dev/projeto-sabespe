import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaBotoesComponent } from './tela-botoes.component';

describe('TelaBotoesComponent', () => {
  let component: TelaBotoesComponent;
  let fixture: ComponentFixture<TelaBotoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaBotoesComponent]
    });
    fixture = TestBed.createComponent(TelaBotoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
