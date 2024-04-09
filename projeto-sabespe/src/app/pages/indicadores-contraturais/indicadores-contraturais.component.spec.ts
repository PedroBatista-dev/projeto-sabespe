import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresContratuaisComponent } from './indicadores-contraturais.component';

describe('IndicadoresContratuaisComponent', () => {
  let component: IndicadoresContratuaisComponent;
  let fixture: ComponentFixture<IndicadoresContratuaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicadoresContratuaisComponent]
    });
    fixture = TestBed.createComponent(IndicadoresContratuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
