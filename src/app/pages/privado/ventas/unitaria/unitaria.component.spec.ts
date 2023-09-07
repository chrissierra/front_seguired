import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitariaComponent } from './unitaria.component';

describe('UnitariaComponent', () => {
  let component: UnitariaComponent;
  let fixture: ComponentFixture<UnitariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
