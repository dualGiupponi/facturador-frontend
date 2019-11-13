import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFacturaClienteComponent } from './lista-factura-cliente.component';

describe('ListaFacturaClienteComponent', () => {
  let component: ListaFacturaClienteComponent;
  let fixture: ComponentFixture<ListaFacturaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFacturaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFacturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
