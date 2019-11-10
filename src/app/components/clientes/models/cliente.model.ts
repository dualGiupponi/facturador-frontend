export class Cliente {
  constructor(
    public id: string,
    public nombre: string,
    public direccion: string,
    public cuit: string,
    public imageCliente?: string,
    public telefono?: number,
    public email?: string,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
