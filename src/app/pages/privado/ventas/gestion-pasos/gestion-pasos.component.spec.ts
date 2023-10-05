import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPasosComponent } from './gestion-pasos.component';

describe('GestionPasosComponent', () => {
  let component: GestionPasosComponent;
  let fixture: ComponentFixture<GestionPasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionPasosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
