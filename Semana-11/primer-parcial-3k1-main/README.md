# Primer Parcial Desarrollo de Software

## Objetivo
El objetivo de este proyecto parcial es que los estudiantes demuestren su capacidad para integrar y completar código en una aplicación web que utiliza tecnologías de frontend y backend. La aplicación mostrará una lista de Servicios ofrecidos por una empresa de limpieza.

## Descripción del Proyecto
Los estudiantes recibirán un código base para una aplicación web que incluye componentes de frontend y backend. Deberán completar ciertas funciones para que la aplicación funcione correctamente. El frontend debe usar HTML y JavaScript para mostrar una lista de Servicios ofrecidos por la empresa. El backend, desarrollado con Node.js, servirá estos datos de los Servicios desde una base de datos en memoria SQLite gestionada por Sequelize.

### Requisitos del Backend
- Completar la implementación de la ruta `GET` en el backend para recuperar Servicios desde la base de datos SQLite utilizando Sequelize.

### Requisitos del Frontend
- Completar la función `cargarServiciosSegunFiltro` en JavaScript para obtener los Servicios desde el backend usando la API Fetch y renderizarlos dinámicamente en la página web.

## Instrucciones
1. **Configuración del Backend:**
   - Se proporcionará el código base para la aplicación Node.js.
   - Los estudiantes deben completar la implementación de la ruta `app.get('/Servicios', async (req, res) => {...})` para que devuelva de la base de datos, los Servicios en cuya descripcion se encuentre incluido el parametro de filtro enviado por el frontend. Se sugiere usar querystring para enviar el filtro desde el frontend.

2. **Configuración del Frontend:**
   - Se proporcionará un archivo HTML básico y el código JavaScript inicial.
   - Los estudiantes deben completar la función `cargarServiciosSegunFiltro` en el código JavaScript para realizar una solicitud fetch al backend, enviando el parametro de filtro ingresado por el usuario, procesar la respuesta y mostrar los Servicios dinámicamente en la página HTML.

3. **Pruebas:**
   - Verificar que la función `cargarServiciosSegunFiltro` obtiene y filtra correctamente los Servicios del backend.
   - Asegurarse de que la ruta del backend devuelve los datos correctos y maneja posibles errores.

4. **Entrega:**
   - Los estudiantes deben subir su código completo a gitlab y a la uv para su revisión.
   - Asegurarse de que el código está bien organizado y comentado adecuadamente.

## Criterios de Evaluación

Para aprobar el parcial, el Webservice con API REST debe funcionar correctamente y cargando la grilla en el frontend.

### Puntuación:

**Funcionalidad** (8 puntos):

#### Backend (4 puntos):


**3 puntos:** La ruta GET /Servicios está implementada correctamente y devuelve los Servicios filtrados de la base de datos SQLite utilizando Sequelize. La respuesta del backend tiene el formato correcto (JSON).

**1 punto:** Manejo adecuado de errores en la ruta del backend.

#### Frontend (4 puntos):

**2 puntos**: La función cargarServiciosSegunFiltro realiza la solicitud fetch al backend enviando el parametro de filtro. Se sugiere usar querystring para enviar el filtro desde el frontend.

**2 puntos**: La función cargarServiciosSegunFiltro procesa la respuesta y muestra los datos dinámicamente en la página HTML, con manejo adecuado de errores.

**Cláusula de Funcionamiento Integral** (indispensable realizar el frontend y backend para poder evaluar la calidad de código y el diseño)

#### Calidad del Código (1 puntos):

**0.5 punto**: El código está bien organizado, indentado correctamente y sigue las convenciones de estilo de codificación.

**0.5 punto**: El código está documentado de manera clara y concisa, explicando la lógica y las decisiones de diseño.

#### Diseño (1 punto):

**1 punto:** El frontend presenta los datos de manera organizada con Bootstrap, tiene diseño responsive y facilita la lectura de la información.

¡Buena suerte y feliz codificación!
