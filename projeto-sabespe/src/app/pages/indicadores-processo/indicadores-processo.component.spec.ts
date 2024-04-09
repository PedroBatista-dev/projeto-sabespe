import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadoresProcessoComponent } from './indicadores-processo.component';

describe('IndicadoresProcessoComponent', () => {
  let component: IndicadoresProcessoComponent;
  let fixture: ComponentFixture<IndicadoresProcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndicadoresProcessoComponent]
    });
    fixture = TestBed.createComponent(IndicadoresProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
