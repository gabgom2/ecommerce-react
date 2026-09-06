# ecommerce-react

Un ecommerce ficticio para aprender la creación de un proyecto en React JS

### Tecnologías utilizadas

* React JS
* Vite

### Librerías utilizadas

* react-icons
* TailwindCSS

### Componentes

- **Header:** Representa la cabecera del documento, contiene logo de la empresa, navbar y CartWidget.
- **Navbar:** Enlaces de navegación internos (No funcionales aún).
- **CartWidget:** Representa los productos que están en el carrito (Número hardcodeado temporalmente).
- **Main:** La sección principal del documento, contiene a ItemsListContainer.
- **ItemsListContainer:** Contenedor donde se ubicarán los productos provenientes de una base de datos externa. Simula un fetch desde un json interno con useEffect y renderiza los productos.
- **Item:** Componente de visualización para un producto específico.
- **Footer:** Contiene autor del proyecto y créditos de los íconos utilizados.

`---`

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

Abrir la url mostrada:

``http://localhost:[numero]``
