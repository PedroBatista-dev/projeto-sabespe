import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasMauaComponent } from './metas-maua.component';

describe('MetasMauaComponent', () => {
  let component: MetasMauaComponent;
  let fixture: ComponentFixture<MetasMauaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasMauaComponent]
    });
    fixture = TestBed.createComponent(MetasMauaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
