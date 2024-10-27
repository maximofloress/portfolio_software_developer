const request = require("supertest");
const app = require("../index");


// test de la ruta /clientes GET sin filtros
describe("GET /clientes", function () {
    it("Devolveria todos los clientes", async function () {
        const res = await request(app)
            .get("/clientes")
            .set("content-type", "application/json");
        expect(res.headers["content-type"]).toEqual(
            "application/json; charset=utf-8"
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            // de la respuesta espero un objeto con el array Items y un numero RegistrosTotal
            expect.arrayContaining([
                // para el array Items espero un objeto con las propiedades id, nombre, apellido, correo y fecha_nacimiento
                    expect.objectContaining({
                        id: expect.any(Number),
                        nombre: expect.any(String),
                        apellido: expect.any(String),
                        correo: expect.any(String),
                        fecha_nacimiento: expect.any(String),
                  }),
            ])
        );
    });
});

// test de la ruta /clientes GET con filtros
describe("GET /clientes con filtros", () => {
    it("Deberia devolver los clientes según filtro ", async () => {
      const res = await request(app).get("/clientes?nombre=Juan");
      expect(res.statusCode).toEqual(200);
  
      expect(verificarPropiedades(res.body)).toEqual(true);
    
      function verificarPropiedades(array) {
        for (let i = 0; i < array.length; i++) {
          if ( !array[i].nombre.includes("Juan") ) {
            return false;
          }
        }
        return true;
      }
      
    });
});
  

// test de la ruta /clientes/:id GET 
describe("GET /clientes/:id", function () {
    it("Devolveria un solo cliente para un id", async function () {
        const res = await request(app)
            .get("/clientes/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nombre: expect.any(String),
                apellido: expect.any(String),
                correo: expect.any(String),
                fecha_nacimiento: expect.any(String),
            })
        );
    });
});


const nuevoCliente = {
    id: Math.floor(Math.random() * 1000), // Genera un id aleatorio
    nombre: "Nombre " + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera un nombre aleatorio
    apellido: "Apellido " + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera un apellido aleatorio
    correo: (() => (Math.random() + 1).toString(36).substring(2))() + "@example.com", // Genera un correo aleatorio
    fecha_nacimiento: new Date().toISOString(),
};

const clienteModificado = {
    id: 1,
    nombre: "Nombre " + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera un nombre aleatorio
    apellido: "Apellido " + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera un apellido aleatorio
    correo: (() => (Math.random() + 1).toString(36).substring(2))() + "@example.com", // Genera un correo aleatorio
    fecha_nacimiento: new Date().toISOString(),
};

// test de la ruta /clientes POST
describe("POST /clientes", () => {
    it("Deberia validar que el cliente que acabo de crear se carga correctamente", async () => {
        const res = await request(app).post("/clientes").send(nuevoCliente);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nombre: expect.any(String),
                apellido: expect.any(String),
                correo: expect.any(String),
                fecha_nacimiento: expect.any(String),
            })
        );
    });
});

// test de la ruta /clientes/:id PUT
describe("PUT /clientes/:id", () => {
    it("Deberia devolver el cliente con el id 1 modificado", async () => {
        const res = await request(app)
            .put("/clientes/1")
            .send(clienteModificado);
        expect(res.statusCode).toEqual(204);
    });
});

// test de la ruta /clientes/:id DELETE --> NOTA: el test falla si se intenta borrar una entidad cuyo id es referenciado por otra tabla, por ello borramos el cliente creado en el test POST
describe("DELETE /clientes/:id", () => {
    it(`Debería validar que el cliente con el id ${nuevoCliente.id} que acabo de crear fue borrado`, async () => {
        const res = await request(app)
            .delete(`/clientes/${nuevoCliente.id}`);
        expect(res.statusCode).toEqual(200);
    });
});
