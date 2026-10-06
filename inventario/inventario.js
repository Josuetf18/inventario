class Inventario {
  constructor() {
    this.productos = [];
  }

  agregar(nuevo) {
    if (this.buscar(nuevo.codigo)) {
      return false;
    }
    this.productos.push(nuevo);
    return true;
  }

  agregarInicio(nuevo) {
    if (this.buscar(nuevo.codigo)) {
      return false;
    }
    for (let i = this.productos.length; i > 0; i--) {
      this.productos[i] = this.productos[i - 1];
    }
    this.productos[0] = nuevo;
    return true;
  }

  buscar(codigo) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo === codigo) {
        return this.productos[i];
      }
    }
    return null;
  }

  eliminar(codigo) {
    let pos = -1;
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo === codigo) {
        pos = i;
        break;
      }
    }

    if (pos !== -1) {
      const productoEliminado = this.productos[pos];
      for (let i = pos; i < this.productos.length - 1; i++) {
        this.productos[i] = this.productos[i + 1];
      }
      this.productos.pop();
      return productoEliminado;
    }
    return null;
  }

  extraerPrimero() {
    if (this.productos.length === 0) {
      return null;
    }

    let primero = this.productos[0];

    for (let i = 0; i < this.productos.length - 1; i++) {
      this.productos[i] = this.productos[i + 1];
    }

    this.productos.pop();
    return primero;
  }

  listar() {
    if (this.productos.length === 0) {
      return "<p>El inventario está vacío.</p>";
    }
    let res = "<h4>Lista de Productos:</h4>";
    for (let i = 0; i < this.productos.length; i++) {
      res += this.productos[i].infoHtml();
    }
    return res;
  }

  listarInverso() {
    if (this.productos.length === 0) {
      return "<p>El inventario está vacío.</p>";
    }
    let res = "<h4>Lista de Productos (Orden Inverso):</h4>";
    for (let i = this.productos.length - 1; i >= 0; i--) {
      res += this.productos[i].infoHtml();
    }
    return res;
  }
}

const inventario = new Inventario();

let nuevo = new Producto(1, "Lapiz", 100, 10); 
inventario.agregar(nuevo);

nuevo = new Producto(2, "Borrador", 200, 20);
inventario.agregar(nuevo);

nuevo = new Producto(3, "Cuaderno", 300, 30);
inventario.agregar(nuevo);

nuevo = new Producto(4, "Clips", 20, 10);
inventario.agregarInicio(nuevo);

nuevo = new Producto(5, "Sacapuntas", 500, 50);
inventario.agregar(nuevo);