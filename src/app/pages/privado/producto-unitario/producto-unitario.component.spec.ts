import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoUnitarioComponent } from './producto-unitario.component';

describe('ProductoUnitarioComponent', () => {
  let component: ProductoUnitarioComponent;
  let fixture: ComponentFixture<ProductoUnitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoUnitarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoUnitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
