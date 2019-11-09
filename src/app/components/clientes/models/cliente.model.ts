export class Cliente {
  constructor(
    public id: string,
    public nombre: string,
    public direccion: string,
    public cuit: string,
    public imageCliente?: string
  ) {
    if (imageCliente == undefined) {
      this.imageCliente =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqWv32vX2afuf65HUGvqUKxXlPFys5xPtn2nkDdOpwBvJv1su&s";
    }
  }
}
