import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCalculadoraComponent } from './pagina-calculadora.component';

describe('PaginaCalculadoraComponent', () => {
  let component: PaginaCalculadoraComponent;
  let fixture: ComponentFixture<PaginaCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
