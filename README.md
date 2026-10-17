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
- **ButtonEmptyCart:** Un botón que específicamente vacía el carrito de productos
- **UserAccessButtons:** Dos botones para registrarse e iniciar sesión
- **CartItem:** Una tarjeta que representa un producto en el carrito, incluye botón para quitarlo del mismo
- **CartWidget:** Link al carrito y un badge indica la cantidad de productos en el mismo
- **EmptyCartDisplay:** Un componente que indica que el carrito no contiene productos e invita al usuario a regresar a la página de inicio
- **Layout:** Organiza los elementos header, footer, fondo y el contenido principal de la página para asegurar persistencia
- **Header:** Representa la cabecera del documento, contiene logo de la empresa, Navbar y CartWidget.
- **Navbar:** Enlaces de navegación por categoría.
- **Footer:** Contiene autor del proyecto y créditos de los íconos utilizados.
- **ItemsListContainer:** Contenedor donde se ubicarán los productos provenientes de Firestore.
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

**editUsername** - Permite al usuario modificar su `user.displayName`

**getProductsFilteredByCategory** - Obtiene los productos de la base de datos, acepta categorías para filtrado por parámetro

**getProductById** - O	btiene un producto en base a su ID

### Rutas de Navegación dinámicas

* **"/"** - Representa Home, la página principal donde se renderizan todos los productos
* **"/category/:id"** - Filtrado de productos por categoría
* **"/item/:id"** - Vista de detalle de un item en particular, incluye función para agregarlo al carrito
* **"/cart"** - Carrito de compras
* **"/user-access"** - Muestra una vista de acciones relacionadas a autenticación de usuario
* **"/user-access/login"** - Página de inicio de sesión para usuarios
* **"/user-access/register"** - Página de registro para usuarios
* **"/checkout"** - Luego de hacer click en el carrito en el botón "Generar Orden", el usuario es redirigido a esta página, donde puede llenar un formulario con sus respectivas validaciones para crear una orden de compra a FireStore. La página contiene una vista protegida si el usuario no ha iniciado sesión o no tiene productos en el carrito. Luego de efectuar la orden, el usuario es notificado (Alerta SweetAlert2) y el carrito se vacía.
* **"*"** - Página de error en caso de tipear mal una URL

---

## Colecciones de FireStore

* **Productos** - Cada documento representa un producto que se puede renderizar en pantalla o agregar al carrito
* **Ordenes** - Órdenes de compra generadas por los usuarios mediante la página "/checkout"

---

## Variables de Entorno

Se adjunta un archivo **.env.example** para facilitar la creación de las variables de entorno necesarias para conectarse a Firebase desde el archivo "**src/components/config/firebase.js**". 

Cada variable cumple la siguiente función:

* **`VITE_FIREBASE_API_KEY`** : clave de API utilizada para identificar el proyecto de Firebase.
* **`VITE_FIREBASE_AUTH_DOMAIN`** : dominio utilizado para la autenticación de usuarios.
* **`VITE_FIREBASE_PROJECT_ID`** : identificador único del proyecto de Firebase.
* **`VITE_FIREBASE_STORAGE_BUCKET`** : ubicación de almacenamiento de archivos del proyecto.
* **`VITE_FIREBASE_MESSAGING_SENDER_ID`** : identificador utilizado para los servicios de mensajería de Firebase.
* **`VITE_FIREBASE_APP_ID`** : identificador de la aplicación registrada en Firebase.

Para configurar estas variables, se debe crear un archivo `.env` en la raíz del proyecto, copiar el contenido de **.env.example** y completar cada valor con los datos correspondientes, disponibles en la configuración del proyecto en Firebase.

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
- Registro e Inicio de sesión para usuarios mediante Firebase Authentication
- Generación de órdenes de compra conectadas a Firestore
- Protección de ruta "/checkout" para usuarios no registrados o sin cuenta iniciada
- Notificación de compra mediante SweetAlert2

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

La terminal mostrará la URL a abrir, copiarla a la barra de direcciones de un navegador web. Reemplazar [numero] por el valor correspondiente en la terminal (por defecto: 5173)

``http://localhost:[numero]``
