import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasSP3Component } from './metas-sp-3.component';

describe('MetasSP3Component', () => {
  let component: MetasSP3Component;
  let fixture: ComponentFixture<MetasSP3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasSP3Component]
    });
    fixture = TestBed.createComponent(MetasSP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
