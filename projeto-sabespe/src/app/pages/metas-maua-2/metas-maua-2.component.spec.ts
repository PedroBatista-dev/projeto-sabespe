import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasMaua2Component } from './metas-maua-2.component';

describe('MetasMaua2Component', () => {
  let component: MetasMaua2Component;
  let fixture: ComponentFixture<MetasMaua2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasMaua2Component]
    });
    fixture = TestBed.createComponent(MetasMaua2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
