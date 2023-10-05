import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompradorComponent } from './header-comprador.component';

describe('HeaderCompradorComponent', () => {
  let component: HeaderCompradorComponent;
  let fixture: ComponentFixture<HeaderCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCompradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
