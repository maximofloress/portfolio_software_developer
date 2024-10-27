const request = require("supertest");
const app = require("../index");

// test de la ruta /categorias GET sin filtros
describe("GET /categorias", function () {
    it("Devolveria todas las categorias", async function () {
        const res = await request(app)
            .get("/categorias")
            .set("content-type", "application/json");
        expect(res.headers["content-type"]).toEqual(
            "application/json; charset=utf-8"
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    nombre: expect.any(String),
                    descripcion: expect.any(String),
                    fecha_modificacion: expect.any(String),
                }),
            ])
        );
    });
});

// test de la ruta /categorias GET con filtros de descripcion
describe("GET /categorias con filtros", () => {
    it("Deberia devolver las categorias según filtro ", async () => {
      const res = await request(app).get("/categorias?descripcion=Explora");
      expect(res.statusCode).toEqual(200);
  
      expect(verificarPropiedades(res.body)).toEqual(true);
    
      function verificarPropiedades(array) {
        for (let i = 0; i < array.length; i++) {
          if (!array[i].descripcion.includes("Explora")) {
            return false;
          }
        }
        return true;
      }
    });
});

// test de la ruta /categorias/:id GET 
describe("GET /categorias/:id", function () {
    it("Devolveria una sola categoria para un id", async function () {
        const res = await request(app)
            .get("/categorias/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nombre: expect.any(String),
                descripcion: expect.any(String),
                fecha_modificacion: expect.any(String),
            })
        );
    });
});

const nuevaCategoria = {
    id: Math.floor(Math.random() * 1000), // Genera un id aleatorio
    nombre: "Nombre" + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera un nombre aleatorio
    descripcion: "Descripcion" + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera una descripcion aleatoria
    fecha_modificacion: new Date().toISOString().split('T')[0], // Genera una fecha de modificacion aleatoria
};

const categoriaModificada = {
    id: 1,
    nombre: "Nombre " + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera un nombre aleatorio
    descripcion: "Descripcion " + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera una descripcion aleatoria
    fecha_modificacion: new Date().toISOString().split('T')[0], // Genera una fecha de modificacion aleatoria
};

// test de la ruta /categorias POST
describe("POST /categorias", () => {
    it(`Deberia validar que la categoria que acabo de crear con id ${nuevaCategoria.id} se carga correctamente`, async () => {
        const res = await request(app).post("/categorias").send(nuevaCategoria);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nombre: expect.any(String),
                descripcion: expect.any(String),
                fecha_modificacion: expect.any(String),
            })
        );
    });
});

// test de la ruta /categorias/:id PUT
describe("PUT /categorias/:id", () => {
    it("Deberia devolver la categoria con el id 1 modificada", async () => {
        const res = await request(app)
            .put("/categorias/1")
            .send(categoriaModificada);
        expect(res.statusCode).toEqual(204);
    });
});

// test de la ruta /categorias/:id DELETE
describe("DELETE /categorias/:id", () => {
    it(`Debería validar que la categoria con el id ${nuevaCategoria.id} que acabo de crear fue borrada`, async () => {
        const res = await request(app)
            .delete(`/categorias/${nuevaCategoria.id}`);
        expect(res.statusCode).toEqual(200);
    });
});