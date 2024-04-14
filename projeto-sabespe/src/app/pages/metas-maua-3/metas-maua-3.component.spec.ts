import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasMaua3Component } from './metas-maua-3.component';

describe('MetasMaua3Component', () => {
  let component: MetasMaua3Component;
  let fixture: ComponentFixture<MetasMaua3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasMaua3Component]
    });
    fixture = TestBed.createComponent(MetasMaua3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
