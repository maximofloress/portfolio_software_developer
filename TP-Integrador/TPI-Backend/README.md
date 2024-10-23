# TPI-Backend

## Introducción

Este proyecto es una aplicación backend para la gestión de una librería. La aplicación está desarrollada utilizando Node.js, Express y SQLite. A continuación, se describen las tablas y sus campos correspondientes que forman parte del dominio de la librería.

## Tablas

### Clientes
- **ID_cliente**: Identificador único del cliente.
- **Nombre**: Nombre del cliente.
- **Apellido**: Apellido del cliente.
- **Dirección**: Dirección del cliente.
- **Correo**: Correo electrónico del cliente.
- **FechaNacimiento**: Fecha de nacimiento del cliente 

### Pedidos
- **ID_pedido**: Identificador único del pedido.
- **ID_cliente**: Identificador del cliente que realizó el pedido.
- **Fecha**: Fecha en que se realizó el pedido.
- **ID_libro**: Identificador del libro.
- **Cantidad**: Cantidad de libros en el pedido.


### Libros
- **ID_libro**: Identificador único del libro.
- **Título**: Título del libro.
- **Autor**: Autor del libro.
- **Género**: Género del libro.
- **Precio**: Precio del libro.
- **FechaRegistro**: Fecha en la que se registro.

### Autores
- **ID_autor**: Identificador único del autor.
- **Nombre**: Nombre del autor.
- **Nacionalidad**: Nacionalidad del autor.
- **FechaNacimiento**: Fecha de nacimiento del autor.


### Categorias
- **ID_categoria**: Identificador único de la categoría.
- **Nombre**: Nombre de la categoría.
- **Descripción**: Descripción de la categoría.
- **FechaModificacion**: Fecha en la que se modifico

### Editoriales
- **ID_editorial**: Identificador único de la editorial.
- **Nombre**: Nombre de la editorial.
- **País**: País de origen de la editorial.
- **Categoria**: Categoria a la cual pertenece la editorial
- **AñoFundación**: Año de fundación de la editorial.


## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para aplicaciones web en Node.js.
- **SQLite**: Sistema de gestión de bases de datos relacional.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd TPI-Backend
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```

## Uso

1. Inicia el servidor:
    ```bash
    npm start
    ```
2. La aplicación estará disponible en `http://localhost:3000`.

