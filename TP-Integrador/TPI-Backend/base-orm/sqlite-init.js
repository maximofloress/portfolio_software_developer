// Este script crea la base de datos SQLite con sus tablas y registros iniciales.

const db = require('aa-sqlite');

async function inicializarBaseDeDatos() {
    await db.open('./.data/libreria.db');
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
            id_libro INTEGER NOT NULL,
            cantidad INTEGER NOT NULL,
            FOREIGN KEY (id_cliente) REFERENCES Clientes(id)
            );`
        );
        console.log("tabla Pedidos creada!");
        await db.run(`
            INSERT INTO Pedidos (id, fecha_pedido, id_cliente, id_libro, cantidad) VALUES 
            (1, '2023-01-01', 1, 101, 10),
            (2, '2023-01-02', 2, 102, 20),
            (3, '2023-01-03', 3, 103, 30),
            (4, '2023-01-04', 4, 104, 40),
            (5, '2023-01-05', 5, 105, 50),
            (6, '2023-01-06', 6, 106, 60),
            (7, '2023-01-07', 7, 107, 70),
            (8, '2023-01-08', 8, 108, 80),
            (9, '2023-01-09', 9, 109, 90),
            (10, '2023-01-10', 10, 110, 100);
        `);
    }
    
    // Cuenta la cantidad de tablas con el nombre 'Clientes'
    res = await db.get("SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'Clientes'", []);
    // si la cantidad de tablas es mayor a 0, entonces la tabla existe
    if (res.contar > 0) existe = true;
    // si la tabla no existe, la creamos
    if (!existe) {
        await db.run(
            `CREATE TABLE Clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nombre TEXT NOT NULL, apellido TEXT NOT NULL, 
            correo TEXT NOT NULL, 
            fecha_nacimiento TEXT NOT NULL
            );`
        );
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

    // Cuenta la cantidad de tablas con el nombre 'Categorias'
    res = await db.get("SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'Categorias'", []);
    // si la cantidad de tablas es mayor a 0, entonces la tabla existe
    if (res.contar > 0) existe = true;
    // si la tabla no existe, la creamos
    if (!existe) {
        await db.run(
            `CREATE TABLE Categorias (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nombre TEXT NOT NULL, descripcion TEXT NOT NULL,
            fecha_modificacion TEXT NOT NULL
            );`
        );
        console.log("tabla Categorias creada!");
        await db.run(`
            INSERT INTO Categorias (id, nombre, descripcion, fecha_modificacion) VALUES 
                (1,'Ciencia Ficcion','Explora conceptos futuristas, avances tecnológicos y su impacto en la sociedad','2024-10-23'),
                (2,'Romance','Se centra en las relaciones amorosas y las emociones que surgen entre los personajes','2024-10-23'),
                (3,'Terror','Busca provocar miedo y tensión en el lector','2024-10-23'),
                (4,'Fantasia','Presenta mundos imaginarios con elementos mágicos y criaturas sobrenaturales','2024-10-23'),
                (5,'Aventura','Se caracteriza por la acción y el viaje','2024-10-23'),
                (6,'Infantil','Dirigido a un público joven, este género incluye historias simples y educativas, con lecciones de vida','2024-10-23'),
                (7,'Juvenil','Atrae a adolescentes y jóvenes adultos, abordando temas como la identidad, las relaciones y los conflictos personales','2024-10-23'),
                (8,'Biografia','Relata la vida de una persona real, destacando sus logros, experiencias y contribuciones','2024-10-23'),
                (9,'Autoayuda','Ofrece consejos prácticos y estrategias para mejorar diversos aspectos de la vida','2024-10-23'),
                (10,'Politica','Analiza temas relacionados con el poder, la gobernanza y la sociedad','2024-10-23');
        `);
    }

    // Cuenta la cantidad de tablas con el nombre 'Editoriales'
    res = await db.get("SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'Editoriales'", []);
    // si la cantidad de tablas es mayor a 0, entonces la tabla existe
    if (res.contar > 0) existe = true;
    // si la tabla no existe, la creamos
    if (!existe) {
        await db.run(
            `CREATE TABLE Editoriales (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            id_categoria INTEGER NOT NULL, 
            nombre TEXT NOT NULL, 
            pais TEXT NOT NULL,
            fecha_fundacion TEXT NOT NULL,
            FOREIGN KEY (id_categoria) REFERENCES Categorias(id)
            );`
        );
        console.log("tabla Editoriales creada!");
        await db.run(`
            INSERT INTO Editoriales (id, id_categoria, nombre, pais, fecha_fundacion) VALUES 
                (1,'1','Penguin Random House','Estados Unidos','2013-06-23'),
                (2,'2','HarperCollins','Estados Unidos','1989-06-23'),
                (3,'3','Simon & Schuster','Estados Unidos','1924-06-23'),
                (4,'4','Hachette Book Group','Estados Unidos','2006-06-23'),
                (5,'5','Macmillan Publishers','Estados Unidos','1843-06-23'),
                (6,'6','Scholastic','Estados Unidos','1920-06-23'),
                (7,'7','Oxford University Press','Reino Unido','1586-06-23'),
                (8,'8','Cambridge University Press','Reino Unido','1534-06-23'),
                (9,'9','Wiley','Estados Unidos','1807-06-23'),
                (10,'10','Routledge','Reino Unido','1836-06-23');`
        );
    }

  
     // Cuenta la cantidad de tablas con el nombre 'Libros'
     res = await db.get("SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'Libros'", []);
     // si la cantidad de tablas es mayor a 0, entonces la tabla existe
     if (res.contar > 0) existe = true;
     // si la tabla no existe, la creamos
    if (!existe) {
        await db.run(
            `CREATE TABLE Libros (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            titulo TEXT NOT NULL, 
            id_autor INTEGER NOT NULL, 
            precio REAL NOT NULL, 
            fecha_publicacion TEXT NOT NULL,
            FOREIGN KEY (id_autor) REFERENCES Autores(id)
            );`
        );
        console.log("tabla Libros creada!");
        await db.run(`
            INSERT INTO Libros (id, titulo, id_autor, precio, fecha_publicacion) VALUES 
            (1, 'Cien años de soledad', 1, '2000', '1967-06-05'),
            (2, 'Don Quijote de la Mancha', 2, '1500', '1605-01-16'),
            (3, 'El amor en los tiempos del cólera', 1, '1800', '1985-03-06'),
            (4, '1984', 4, '1200', '1949-06-08'),
            (5, 'Orgullo y prejuicio', 3, '1000', '1813-01-28'),
            (6, 'Crónica de una muerte anunciada', 1, '1400', '1981-04-06'),
            (7, 'La sombra del viento', 5, '2200', '2001-04-17'),
            (8, 'El túnel', 6, '1600', '1948-01-01'),
            (9, 'Fahrenheit 451', 7, '1300', '1953-10-19'),
            (10, 'El viejo y el mar', 8, '1100', '1952-09-01');
        `);
    }




      // Cuenta la cantidad de tablas con el nombre 'Autores'
    res = await db.get("SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'Autores'", []);
    // si la cantidad de tablas es mayor a 0, entonces la tabla existe
    if (res.contar > 0) existe = true;
    // si la tabla no existe, la creamos
    if (!existe) {
        await db.run(
            `CREATE TABLE Autores (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            nombre TEXT NOT NULL, 
            nacionalidad TEXT NOT NULL, 
            fecha_nacimiento_autor TEXT NOT NULL
            );`
        );
        console.log("tabla Autores creada!");
        await db.run(`
            INSERT INTO Autores (id, nombre, nacionalidad, fecha_nacimiento_autor) VALUES 
            (1, 'Gabriel García Márquez', 'Colombiano', '1927-03-06'),
            (2, 'Miguel de Cervantes', 'Español', '1547-09-29'),
            (3, 'Jane Austen', 'Británica', '1775-12-16'),
            (4, 'George Orwell', 'Británico', '1903-06-25'),
            (5, 'Carlos Ruiz Zafón', 'Español', '1964-09-25'),
            (6, 'Ernesto Sabato', 'Argentino', '1911-06-23'),
            (7, 'Ray Bradbury', 'Estadounidense', '1920-08-22'),
            (8, 'Ernest Hemingway', 'Estadounidense', '1899-07-21'),
            (9, 'Julio Cortázar', 'Argentino', '1914-08-26'),
            (10, 'Isabel Allende', 'Chilena', '1942-08-02');
            `);
    }


    db.close();
}

inicializarBaseDeDatos();

module.exports = inicializarBaseDeDatos;