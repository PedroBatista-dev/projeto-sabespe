import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasSA2Component } from './metas-sa-2.component';

describe('MetasSA2Component', () => {
  let component: MetasSA2Component;
  let fixture: ComponentFixture<MetasSA2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasSA2Component]
    });
    fixture = TestBed.createComponent(MetasSA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
