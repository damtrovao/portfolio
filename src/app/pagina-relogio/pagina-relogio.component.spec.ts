import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRelogioComponent } from './pagina-relogio.component';

describe('PaginaRelogioComponent', () => {
  let component: PaginaRelogioComponent;
  let fixture: ComponentFixture<PaginaRelogioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaRelogioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaRelogioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
