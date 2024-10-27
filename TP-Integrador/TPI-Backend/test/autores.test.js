const request = require("supertest");
const app = require("../index");

// test de la ruta /autores GET sin filtros
describe("GET /autores", function () {
    it("Devolveria todos los autores", async function () {
        const res = await request(app)
            .get("/autores")
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
                    nacionalidad: expect.any(String),
                    fecha_nacimiento_autor: expect.any(String),
                }),
            ])
        );
    });
});

// test de la ruta /autores GET con filtros por nacionalidad
describe("GET /autores con filtros", () => {
    it("Deberia devolver los autores según filtro ", async () => {
        const res = await request(app).get("/autores?nombre=Orwell");
        expect(res.statusCode).toEqual(200);

        expect(verificarPropiedades(res.body)).toEqual(true);

        function verificarPropiedades(array) {
            for (let i = 0; i < array.length; i++) {
                if (!array[i].nombre.includes('Orwell')) {
                    return false;
                }
            }
            return true;
        }
    });
});

// test de la ruta /autores/:id GET 
describe("GET /autores/:id", function () {
    it("Devolveria un solo autor para un id", async function () {
        const res = await request(app)
            .get("/autores/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nombre: expect.any(String),
                nacionalidad: expect.any(String),
                fecha_nacimiento_autor: expect.any(String),
            })
        );
    });
});

const nuevoAutor = {
    id: Math.floor(Math.random() * 1000),
    nombre: `NuevoAutor${Math.floor(Math.random() * 1000)}`,
    nacionalidad: `Nacionalidad${Math.floor(Math.random() * 1000)}`,
    fecha_nacimiento_autor: new Date().toISOString().split('T')[0],
};

const autorModificado = {
    nombre: `AutorModificado${Math.floor(Math.random() * 1000)}`,
    nacionalidad: `Nacionalidad${Math.floor(Math.random() * 1000)}`,
    fecha_nacimiento_autor: new Date().toISOString().split('T')[0],
};

// test de la ruta /autores POST
describe("POST /autores", () => {
    it(`Deberia validar que el autor que acabo de crear id ${nuevoAutor.id} se carga correctamente`, async () => {
        const res = await request(app).post("/autores").send(nuevoAutor);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                nombre: expect.any(String),
                nacionalidad: expect.any(String),
                fecha_nacimiento_autor: expect.any(String),
            })
        );
    });
});

// test de la ruta /autores/:id PUT
describe("PUT /autores/:id", () => {
    it("Deberia devolver el autor con el id 1 modificado", async () => {
        const res = await request(app)
            .put("/autores/1")
            .send(autorModificado);
        expect(res.statusCode).toEqual(204);
    });
});

// test de la ruta /autores/:id DELETE
describe("DELETE /autores/:id", () => {
    it(`Debería validar que el autor con el id ${nuevoAutor.id} que acabo de crear fue borrado`, async () => {
        const res = await request(app)
            .delete(`/autores/${nuevoAutor.id}`);
        expect(res.statusCode).toEqual(200);
    });
});