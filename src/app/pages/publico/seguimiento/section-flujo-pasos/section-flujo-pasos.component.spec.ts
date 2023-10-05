import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFlujoPasosComponent } from './section-flujo-pasos.component';

describe('SectionFlujoPasosComponent', () => {
  let component: SectionFlujoPasosComponent;
  let fixture: ComponentFixture<SectionFlujoPasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionFlujoPasosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFlujoPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
