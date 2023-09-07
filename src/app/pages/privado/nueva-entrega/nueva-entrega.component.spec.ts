import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaEntregaComponent } from './nueva-entrega.component';

describe('NuevaEntregaComponent', () => {
  let component: NuevaEntregaComponent;
  let fixture: ComponentFixture<NuevaEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaEntregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
