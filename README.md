# Boardmania: e-commerce en React

Un ecommerce ficticio para aprendizaje de proyectos en React JS

### Tecnologías utilizadas

* **React JS**
* **Vite**
* **Firebase**

### Librerías utilizadas

* **react-icons** / Componentes de iconos personalizados
* **TailwindCSS** / Librería de estilos
* **react-router-dom** / Sirve para navegación estilo SPA
* **SweetAlert2** / Para notificaciones relacionadas con las órdenes de compra

### Componentes

- **Button:** Un componente que aplica estilos para un botón y acepta función onClick y diferentes estilos de colores
- **CartItem:** Una tarjeta que representa un producto en el carrito, incluye botón para quitarlo del mismo
- **CartWidget:** Link al carrito y un badge indica la cantidad de productos en el mismo
- **Context / Cart:** Contexto y Provider para poder utilizar funciones y estado del carrito en toda la aplicación
- **Layout:** Organiza los elementos header, footer, fondo y el contenido principal de la página para asegurar persistencia
- **Header:** Representa la cabecera del documento, contiene logo de la empresa, Navbar y CartWidget.
- **Navbar:** Enlaces de navegación por categoría.
- **Footer:** Contiene autor del proyecto y créditos de los íconos utilizados.
- **ItemsListContainer:** Contenedor donde se ubicarán los productos provenientes de una base de datos externa.
- **ItemList:** Este componente se encargará de recorrer el array de productos con un .map() y generar una tarjeta "Item" por cada uno
- **Item:** Componente de visualización para un producto específico.
- **ItemDetail:** Una vista a mayor detalle del producto con información adicional
- **ItemCount:** Recibe por props cantidad máxima según stock y cantidad de productos ya en el carrito, permite mostrar y modificar la cantidad antes de agregarla al carrito de compras

### Páginas

* **BadUrl404** - Página de error general
* **Cart** - El carrito de compras
* **Home** -  Da una bienvenida y muestra todos los productos
* **ItemDetailContainer** - Página para mostrar el detalle de un producto específico
* **UserPages:** UserAccess, UserLogin, UserRegister. Páginas para registro, inicio de sesión y acceso para usuarios

### Custom Hooks

**useFetch** - Evita duplicar la lógica del fetch que se utiliza en varios componentes

### Contextos

**AuthContext** - Contexto relacionado a autenticación de usuarios

**CartContext** - Contexto relacionado a los items en el carrito de compras

### Servicios

**editUsername** - Permite al usuario modificar su nameDisplay

**getProductsFilteredByCategory** - Obtiene los productos de la base de datos firestore, acepta categorías para filtrado por parámetro

**getProductById** - Similar a getproducts(), pero obtiene un producto en base a su ID

**generateCheckout** - Genera ordenes de compra mediante notificaciones SweetAlert2. Detecta si el usuario está logeado (en cuyo caso puede generar una orden de compra y enviarla a Firebase) o no (En este caso será invitado a registrarse o logearse)

### Rutas de Navegación dinámicas

* **"/"** - Representa Home, la página principal donde se renderizan todos los productos
* **"/category/:id"** - Filtrado de productos por categoría
* **"/item/:id"** - Vista de detalle de un item en particular, incluye función para agregarlo al carrito
* **"/cart"** - Carrito de compras
* **"/user-access"** - Muestra una vista de acciones relacionadas a autenticación de usuario
* **"/user-access/login"** - Página de inicio de sesión para usuarios
* **"/user-access/register"** - Página de registro para usuarios
* **"*"** - Página de error en caso de tipear mal una URL

---

## Funcionalidades

- Visualización del catálogo de productos
- Filtrado de productos por categoría
- Vista detallada de cada producto
- Control de cantidad según stock disponible
- Agregado de productos al carrito
- Eliminación de productos del carrito
- Vaciar carrito
- Cálculo de cantidad total y precio total
- Navegación mediante React Router
- Página 404 para rutas inexistentes

---

## Instalación y ejecución

### Requisitos

- Node.js
- npm

### Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

Instalar las dependencias:

``npm install``

Ejecutar el proyecto:

``npm run dev``

La terminal mostrará la URL a abrir, copiarla a la barra de direcciones de un navegador web (puerto por defecto: 5173)

``http://localhost:[numero]``
