import { productos } from "./asyncMock";



export function getProductById(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((producto) => producto.id === productId);
      producto ? resolve(producto) : reject(new Error("Producto no encontrado"));
    }, 500); // simula la demora de una API
  });
}

