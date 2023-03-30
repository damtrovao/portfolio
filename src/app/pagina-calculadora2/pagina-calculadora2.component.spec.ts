import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCalculadora2Component } from './pagina-calculadora2.component';

describe('PaginaCalculadora2Component', () => {
  let component: PaginaCalculadora2Component;
  let fixture: ComponentFixture<PaginaCalculadora2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCalculadora2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCalculadora2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
