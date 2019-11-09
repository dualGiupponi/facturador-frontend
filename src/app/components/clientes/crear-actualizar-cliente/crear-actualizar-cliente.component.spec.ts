import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActualizarClienteComponent } from './crear-actualizar-cliente.component';

describe('CrearActualizarClienteComponent', () => {
  let component: CrearActualizarClienteComponent;
  let fixture: ComponentFixture<CrearActualizarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearActualizarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActualizarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
