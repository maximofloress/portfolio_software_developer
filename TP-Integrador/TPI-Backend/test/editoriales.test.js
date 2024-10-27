const request = require("supertest");
const app = require("../index");

// test de la ruta /editoriales GET sin filtros
describe("GET /editoriales", function () {
    it("Devolveria todas las editoriales", async function () {
        const res = await request(app)
            .get("/editoriales")
            .set("content-type", "application/json");
        expect(res.headers["content-type"]).toEqual(
            "application/json; charset=utf-8"
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                id_categoria: expect.any(Number),
                nombre: expect.any(String),
                pais: expect.any(String),
                fecha_fundacion: expect.any(String),
            }),
            ])
        );
    });
});

// test de la ruta /editoriales GET con filtros por nombre
describe("GET /editoriales con filtros", () => {
    it("Deberia devolver las editoriales según filtro ", async () => {
      const res = await request(app).get("/editoriales?nombre=Simon");
      expect(res.statusCode).toEqual(200);
  
      expect(verificarPropiedades(res.body)).toEqual(true);
    
      function verificarPropiedades(array) {
        for (let i = 0; i < array.length; i++) {
          if (!array[i].nombre.includes('Simon')) {
            return false;
          }
        }
        return true;
      }
      
    });
});
  
// test de la ruta /editoriales/:id GET 
describe("GET /editoriales/:id", function () {
    it("Devolveria una sola editorial para el id 3", async function () {
        const res = await request(app)
            .get("/editoriales/3");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                id_categoria: expect.any(Number),
                nombre: expect.any(String),
                pais: expect.any(String),
                fecha_fundacion: expect.any(String),
            })
        );
    });
});

const paises = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Peru", "Bolivia", "Ecuador", "Colombia", "Venezuela"];
const nuevaEditorial = {
    id: Math.floor(Math.random() * 1000),
    id_categoria: 1, // Asumiendo que existe una categoría con id 1
    nombre: "Nueva Editorial" + Math.floor(Math.random() * 1000),
    pais : paises[Math.floor(Math.random() * paises.length)],
    fecha_fundacion: new Date().toISOString().split('T')[0],
};

const editorialModificada = {
    id: Math.floor(Math.random() * 1000),
    id_categoria: 1, // Asumiendo que existe una categoría con id 1
    nombre: "Nueva Editorial" + Math.floor(Math.random() * 1000),
    pais : paises[Math.floor(Math.random() * paises.length)],
    fecha_fundacion: new Date().toISOString().split('T')[0],
};

// test de la ruta /editoriales POST
describe("POST /editoriales", () => {
    it(`Deberia validar que la editorial que acabo de crear con id ${nuevaEditorial.id} se carga correctamente`, async () => {
        const res = await request(app).post("/editoriales").send(nuevaEditorial);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                id_categoria: expect.any(Number),
                nombre: expect.any(String),
                pais: expect.any(String),
                fecha_fundacion: expect.any(String),
            })
        );
    });
});

// test de la ruta /editoriales/:id PUT
describe("PUT /editoriales/:id", () => {
    it("Deberia devolver la editorial con el id 1 modificada", async () => {
        const res = await request(app)
            .put("/editoriales/2")
            .send(editorialModificada);
        expect(res.statusCode).toEqual(204);
    });
});

// test de la ruta /editoriales/:id DELETE --> NOTA: el test falla si se intenta borrar una entidad cuyo id es referenciado por otra tabla, por ello borramos la editorial creada en el test POST
describe("DELETE /editoriales/:id", () => {
    it(`Debería validar que la editorial con el id ${nuevaEditorial.id} que acabo de crear fue borrada`, async () => {
        const res = await request(app)
            .delete(`/editoriales/${nuevaEditorial.id}`);
        expect(res.statusCode).toEqual(200);
    });
});