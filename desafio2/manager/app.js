import express from "express";
import ProductManager from "./productManager.js";

const app = express();
const port = 8080; 

const manager = new ProductManager();

app.get("/products", async (req, res) => {
  const limit = req.query.limit;
  let products = await manager.getProducts();

  if (limit) {
    const parsedLimit = parseInt(limit);
    products = products.slice(0, parsedLimit);
  }

  res.json({ products });
});

app.get("/products/:pid", async (req, res) => {
  const productId = parseInt(req.params.pid);
  const product = await manager.getProductById(productId);

  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});














/* 
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

ejemploUso(); */