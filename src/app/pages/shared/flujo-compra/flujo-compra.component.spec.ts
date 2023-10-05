import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoCompraComponent } from './flujo-compra.component';

describe('FlujoCompraComponent', () => {
  let component: FlujoCompraComponent;
  let fixture: ComponentFixture<FlujoCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlujoCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlujoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
