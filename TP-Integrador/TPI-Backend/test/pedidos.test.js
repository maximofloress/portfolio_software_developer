const request = require("supertest");
const app = require("../index");

// test de la ruta /pedidos GET sin filtros
describe("GET /pedidos", function () {
    it("Devolveria todos los pedidos", async function () {
        const res = await request(app)
            .get("/pedidos")
            .set("content-type", "application/json");
        expect(res.headers["content-type"]).toEqual(
            "application/json; charset=utf-8"
        );
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                id_cliente: expect.any(Number),
                id_libro: expect.any(Number),
                fecha_pedido: expect.any(String),
                cantidad: expect.any(Number),
            }),
            ])
        );
    });
});

// test de la ruta /pedidos GET con filtros por id_libro
describe("GET /pedidos con filtros", () => {
    it("Deberia devolver los pedidos según filtro ", async () => {
      const res = await request(app).get("/pedidos?id_libro=1");
      expect(res.statusCode).toEqual(200);
  
      expect(verificarPropiedades(res.body)).toEqual(true);
    
      function verificarPropiedades(array) {
        for (let i = 0; i < array.length; i++) {
          if (!array[i].id_libro.toString().includes('1')) {
            return false;
          }
        }
        return true;
      }
      
    });
});
  
// test de la ruta /pedidos/:id GET 
describe("GET /pedidos/:id", function () {
    it("Devolveria un solo pedido para un id", async function () {
        const res = await request(app)
            .get("/pedidos/1");
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                id_cliente: expect.any(Number),
                id_libro: expect.any(Number),
                fecha_pedido: expect.any(String),
                cantidad: expect.any(Number),
            })
        );
    });
});

// Para las entidades que tienen un campo que hace referencia a otra tabla, (id_cliente) este id debe de existir en la tabla referenciada, en este caso la tabla Clientes
const nuevoPedido = {
    id: Math.floor(Math.random() * 1000),
    id_cliente: 1,
    id_libro: Math.floor(Math.random() * 1000),
    fecha_pedido: new Date().toISOString().split('T')[0],
    cantidad: Math.floor(Math.random() * 10) + 1,
};

const pedidoModificado = {
    id: 1,
    id_cliente: 2,
    id_libro: Math.floor(Math.random() * 1000),
    fecha_pedido: new Date().toISOString().split('T')[0],
    cantidad: Math.floor(Math.random() * 10) + 1,
};

// test de la ruta /pedidos POST
describe("POST /pedidos", () => {
    it("Deberia validar que el pedido que acabo de crear se carga correctamente", async () => {
        const res = await request(app).post("/pedidos").send(nuevoPedido);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                id_cliente: expect.any(Number),
                id_libro: expect.any(Number),
                fecha_pedido: expect.any(String),
                cantidad: expect.any(Number),
            })
        );
    });
});

// test de la ruta /pedidos/:id PUT
describe("PUT /pedidos/:id", () => {
    it("Deberia devolver el pedido con el id 1 modificado", async () => {
        const res = await request(app)
            .put("/pedidos/1")
            .send(pedidoModificado);
        expect(res.statusCode).toEqual(204);
    });
});

// test de la ruta /pedidos/:id DELETE --> NOTA: el test falla si se intenta borrar una entidad cuyo id es referenciado por otra tabla, por ello borramos el pedido creado en el test POST
describe("DELETE /pedidos/:id", () => {
    it(`Debería validar que el pedido con el id ${nuevoPedido.id} que acabo de crear fue borrado`, async () => {
        const res = await request(app)
            .delete(`/pedidos/${nuevoPedido.id}`);
        expect(res.statusCode).toEqual(200);
    });
});