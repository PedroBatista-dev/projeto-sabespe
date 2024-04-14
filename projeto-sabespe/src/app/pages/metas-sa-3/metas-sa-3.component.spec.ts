import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasSA3Component } from './metas-sa-3.component';

describe('MetasSA3Component', () => {
  let component: MetasSA3Component;
  let fixture: ComponentFixture<MetasSA3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasSA3Component]
    });
    fixture = TestBed.createComponent(MetasSA3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
