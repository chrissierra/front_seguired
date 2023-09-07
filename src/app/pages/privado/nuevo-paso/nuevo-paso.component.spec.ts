import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPasoComponent } from './nuevo-paso.component';

describe('NuevoPasoComponent', () => {
  let component: NuevoPasoComponent;
  let fixture: ComponentFixture<NuevoPasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoPasoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
