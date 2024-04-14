import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasSP2Component } from './metas-sp-2.component';

describe('MetasSP2Component', () => {
  let component: MetasSP2Component;
  let fixture: ComponentFixture<MetasSP2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasSP2Component]
    });
    fixture = TestBed.createComponent(MetasSP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
