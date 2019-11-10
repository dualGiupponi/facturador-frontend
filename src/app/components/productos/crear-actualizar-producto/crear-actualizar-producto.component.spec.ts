import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarProductoComponent } from './crear-actualizar-producto.component';

describe('CrearActualizarProductoComponent', () => {
  let component: CrearActualizarProductoComponent;
  let fixture: ComponentFixture<CrearActualizarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearActualizarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActualizarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
