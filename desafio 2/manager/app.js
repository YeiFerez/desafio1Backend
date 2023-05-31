import ProductManager from "./productManager.js";



// Crear una instancia de ProductManager
const manager = new ProductManager();

// Ejemplo de uso de los métodos
async function ejemploUso() {
  // Agregar un nuevo producto
  const newProduct = {
    title: "Nuevo producto",
    description: "nueva descripcion",
    price: 9.99,
    thumbnail: "nueva pagina",
    code: "P4",
    stock: 10
  };
  await manager.addProduct(newProduct);

  // Obtener todos los productos
  const products = await manager.getProducts();
  console.log("Productos:", products);

  // Obtener un producto por ID
  const productId = 1;
  const product = await manager.getProductById(productId);
  console.log("Producto por ID:", product);

  // Actualizar un producto
  const updatedFields = {
    title: "Producto actualizado",
    price: 14.99,
  };
  await manager.updateProduct(productId, updatedFields);

  // Eliminar un producto
  await manager.deleteProduct(productId);
}

ejemploUso();