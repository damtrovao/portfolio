import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaForcaComponent } from './pagina-forca.component';

describe('PaginaForcaComponent', () => {
  let component: PaginaForcaComponent;
  let fixture: ComponentFixture<PaginaForcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaForcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaForcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
