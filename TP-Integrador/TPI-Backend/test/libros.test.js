const request = require("supertest");
const app = require("../index");

// test de la ruta /libros GET sin filtros
describe("GET /libros", function () {
    it("Devolveria todos los libros", async function () {
        const res = await request(app)
            .get("/libros")
            .set("content-type", "application/json");
        expect(res.headers["content-type"]).toEqual(
            "application/json; charset=utf-8"
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    titulo: expect.any(String),
                    id_autor: expect.any(Number),
                    precio: expect.any(Number),
                    fecha_publicacion: expect.any(String),
                }),
            ])
        );
    });
});

// test de la ruta /libros GET con filtros
describe("GET /libros con filtros", () => {
    it("Deberia devolver los libros según filtro ", async () => {
        const res = await request(app).get("/libros?titulo=Quijote");
        expect(res.statusCode).toEqual(200);

        expect(verificarPropiedades(res.body)).toEqual(true);

        function verificarPropiedades(array) {
            for (let i = 0; i < array.length; i++) {
                if (!array[i].titulo.includes("Quijote")) {
                    return false;
                }
            }
            return true;
        }
    });
});

// test de la ruta /libros/:id GET 
describe("GET /libros/:id", function () {
    it("Devolveria un solo libro para un id", async function () {
        const res = await request(app)
            .get("/libros/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                titulo: expect.any(String),
                id_autor: expect.any(Number),
                precio: expect.any(Number),
                fecha_publicacion: expect.any(String),
            })
        );
    });
});

const nuevoLibro = {
    id: Math.floor(Math.random() * 1000), // Genera un id aleatorio
    titulo: "Titulo " + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera un titulo aleatorio
    id_autor: 1, // Asume que el autor con id 1 existe
    precio: parseFloat((Math.random() * 100).toFixed(2)), // Genera un precio aleatorio
    fecha_publicacion: new Date().toISOString().split('T')[0], // Genera una fecha de publicación aleatoria
};

const libroModificado = {
    id: 1,
    titulo: "Titulo " + (() => (Math.random() + 1).toString(36).substring(2))(), // Genera un titulo aleatorio
    id_autor: 1, // Asume que el autor con id 1 existe
    precio: parseFloat((Math.random() * 100).toFixed(2)), // Genera un precio aleatorio
    fecha_publicacion: new Date().toISOString().split('T')[0], // Genera una fecha de publicación aleatoria
};

// test de la ruta /libros POST
describe("POST /libros", () => {
    it(`Deberia validar que el libro que acabo de crear id ${nuevoLibro.id} se carga correctamente`, async () => {
        const res = await request(app).post("/libros").send(nuevoLibro);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                titulo: expect.any(String),
                id_autor: expect.any(Number),
                precio: expect.any(Number),
                fecha_publicacion: expect.any(String),
            })
        );
    });
});

// test de la ruta /libros/:id PUT
describe("PUT /libros/:id", () => {
    it("Deberia devolver el libro con el id 1 modificado", async () => {
        const res = await request(app)
            .put("/libros/1")
            .send(libroModificado);
        expect(res.statusCode).toEqual(204);
    });
});

// test de la ruta /libros/:id DELETE --> NOTA: el test falla si se intenta borrar una entidad cuyo id es referenciado por otra tabla, por ello borramos el libro creado en el test POST
describe("DELETE /libros/:id", () => {
    it(`Debería validar que el libro con el id ${nuevoLibro.id} que acabo de crear fue borrado`, async () => {
        const res = await request(app)
            .delete(`/libros/${nuevoLibro.id}`);
        expect(res.statusCode).toEqual(200);
    });
});