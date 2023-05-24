class ProductManager {
    constructor() {
      this.products = [];
      this.inicioId = 0;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado.");
      }
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      
      const codigoDuplicado = this.products.some((product) => product.code === code);
  
  
      if (codigoDuplicado) {
        console.log("Error: El código del producto ya existe.");
        return;
      }
  
      const product = {
        id: this.generarId(),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      console.log("Producto agregado:", product);
    }
  
    generarId() {
      this.inicioId++;
      return this.inicioId;
    }
  }
  
  
  const manager = new ProductManager();

  manager.addProduct("Iphone 14 pro-max", "El celular de tus sueños", 1500, "https://res.cloudinary.com/dnqyxmpxg/image/upload/v1682394890/iphone-14promax_ojomsg.png", "P1", 55);
  manager.addProduct("Galaxy S", "Nuestro celular insignia Samsung", 1350, "https://res.cloudinary.com/dnqyxmpxg/image/upload/v1682394890/s22_vvlfhl.jpg", "P2", 80);
  
  const products = manager.getProducts();
  console.log("Productos:", products);
  
  const productId = 1;
  const product = manager.getProductById(productId);
  console.log("Producto por ID:", product);
  
  