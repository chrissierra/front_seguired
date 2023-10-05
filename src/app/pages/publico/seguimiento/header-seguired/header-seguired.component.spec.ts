import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSeguiredComponent } from './header-seguired.component';

describe('HeaderSeguiredComponent', () => {
  let component: HeaderSeguiredComponent;
  let fixture: ComponentFixture<HeaderSeguiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSeguiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSeguiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
