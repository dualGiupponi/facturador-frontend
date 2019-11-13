export class Producto {
  constructor(
    public id: string,
    public nombre: string,
    public codigo: string,
    public descripcion: string,
    public precio_unitario: number,
    public createdAt?: String,
    public updatedAt?: String
  ) {}
}
