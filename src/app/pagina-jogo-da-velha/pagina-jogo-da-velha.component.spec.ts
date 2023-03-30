import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaJogoDaVelhaComponent } from './pagina-jogo-da-velha.component';

describe('PaginaJogoDaVelhaComponent', () => {
  let component: PaginaJogoDaVelhaComponent;
  let fixture: ComponentFixture<PaginaJogoDaVelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaJogoDaVelhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaJogoDaVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
