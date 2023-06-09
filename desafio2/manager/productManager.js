import fs from "fs";



class ProductManager {
  constructor() {
    this.path = './desafio2/archivoProducts/Products.json' ;
  }

  async addProduct(product) {
    const products = await this.getProducts();

    const lastProduct = products[products.length - 1];
    const newId = lastProduct ? lastProduct.id + 1 : 1;
    product.id = newId;

    products.push(product);
    await this.saveProducts(products);

    console.log("Producto agregado:", product);
  }

  async getProducts() {
    try {
      const data = await fs.promises.readFile(this.path, "utf8");
      const products = JSON.parse(data);
      return products;
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      return [];
    }
  }
  

  async getProductById(id) {
    const products = await this.getProducts();

    const product = products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      console.log("Producto no encontrado.");
      return null;
    }
  }

  async updateProduct(id, updatedFields) {
    const products = await this.getProducts();

    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
      products[productIndex] = { ...products[productIndex], ...updatedFields };
      await this.saveProducts(products);
      console.log("Producto actualizado:", products[productIndex]);
    } else {
      console.log("Producto no encontrado.");
    }
  }

  async deleteProduct(id) {
    const products = await this.getProducts();

    const productIndex = products.findIndex((p) => p.id === id);
    if (productIndex !== -1) {
      const deletedProduct = products.splice(productIndex, 1)[0];
      await this.saveProducts(products);
      console.log("Producto eliminado:", deletedProduct);
    } else {
      console.log("Producto no encontrado.");
    }
  }

  async saveProducts(products) {
    const jsonData = JSON.stringify(products, null, 2);
    try {
      await fs.promises.writeFile(this.path, jsonData);
    } catch (error) {
      console.error("Error al escribir el archivo:", error);
    }
  }
}

export default ProductManager;
