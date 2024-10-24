// Este script crea la base de datos SQLite con sus tablas y registros iniciales.

const db = require('aa-sqlite');

async function inicializarBaseDeDatos() {
    await db.open('../.data/libreria.db');
    let existe = false;
    let res = null;
    
    // Cuenta la cantidad de tablas con el nombre 'Pedidos'
    res = await db.get("SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'Pedidos'", []);
    // si la cantidad de tablas es mayor a 0, entonces la tabla existe
    if (res.contar > 0) existe = true;
    // si la tabla no existe, la creamos
    if (!existe) {
        await db.run(
            `CREATE TABLE Pedidos (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            fecha_pedido TEXT NOT NULL, 
            id_cliente INTEGER NOT NULL, 
            cantidad INTEGER NOT NULL,
            FOREIGN KEY (id_cliente) REFERENCES Clientes(id)
            );`
        );
        console.log("tabla Pedidos creada!");
        await db.run(`
            INSERT INTO Pedidos (id, fecha_pedido, id_cliente, cantidad) VALUES 
            (1, '2023-01-01', 1, 10),
            (2, '2023-01-02', 2, 20),
            (3, '2023-01-03', 3, 30),
            (4, '2023-01-04', 4, 40),
            (5, '2023-01-05', 5, 50),
            (6, '2023-01-06', 6, 60),
            (7, '2023-01-07', 7, 70),
            (8, '2023-01-08', 8, 80),
            (9, '2023-01-09', 9, 90),
            (10, '2023-01-10', 10, 100);
        `);
    }
    
    // Cuenta la cantidad de tablas con el nombre 'Clientes'
    res = await db.get("SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'Clientes'", []);
    // si la cantidad de tablas es mayor a 0, entonces la tabla existe
    if (res.contar > 0) existe = true;
    // si la tabla no existe, la creamos
    if (!existe) {
        await db.run("CREATE TABLE Clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT NOT NULL, apellido TEXT NOT NULL, correo TEXT NOT NULL, fecha_nacimiento TEXT NOT NULL);");
        console.log("tabla Clientes creada!");
        await db.run(`
            INSERT INTO Clientes (id, nombre, apellido, correo, fecha_nacimiento) VALUES 
            (1, 'Juan', 'Perez', 'juan.perez@example.com', '1980-01-01'),
            (2, 'Maria', 'Gomez', 'maria.gomez@example.com', '1985-02-02'),
            (3, 'Carlos', 'Lopez', 'carlos.lopez@example.com', '1990-03-03'),
            (4, 'Ana', 'Martinez', 'ana.martinez@example.com', '1995-04-04'),
            (5, 'Luis', 'Garcia', 'luis.garcia@example.com', '2000-05-05'),
            (6, 'Laura', 'Rodriguez', 'laura.rodriguez@example.com', '2005-06-06'),
            (7, 'Jose', 'Hernandez', 'jose.hernandez@example.com', '2010-07-07'),
            (8, 'Marta', 'Fernandez', 'marta.fernandez@example.com', '2015-08-08'),
            (9, 'Pedro', 'Sanchez', 'pedro.sanchez@example.com', '2020-09-09'),
            (10, 'Sofia', 'Ramirez', 'sofia.ramirez@example.com', '2025-10-10');
        `);
    }

    db.close();
}

inicializarBaseDeDatos();

module.exports = inicializarBaseDeDatos;