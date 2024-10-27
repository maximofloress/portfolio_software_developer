const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize("sqlite:" + "./.data/libreria.db");

// definimos el modelo de entidades con el ORM Sequelize

// Definicion del modelo de la entidad Clientes

const Cliente = sequelize.define('Cliente', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_nacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        tableName: 'Clientes',
        timestamps: false
    }
);

// Definicion del modelo de la entidad Pedidos
const Pedido = sequelize.define('Pedido', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Clientes', // Nombre de la tabla referenciada
                key: 'id' // Clave primaria de la tabla referenciada
            }
        },
        id_libro: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_pedido: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: 'Pedidos', // Nombre de la tabla en la base de datos
        timestamps: false
    }
);

// Definicion del modelo de la entidad Libros

const Libro = sequelize.define('Libro', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_autor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Autores', // Nombre de la tabla referenciada
                key: 'id' // Clave primaria de la tabla referenciada
            }
        },
        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        fecha_publicacion: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        tableName: 'Libros', // Nombre de la tabla en la base de datos
        timestamps: false
}
);

// Definicion del modelo de la entidad Autores

const Autor = sequelize.define('Autor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nacionalidad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_nacimiento_autor: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        tableName: 'Autores', // Nombre de la tabla en la base de datos
        timestamps: false
}
);

// Definicion del modelo de la entidad Categorias
const Categoria = sequelize.define('Categoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_modificacion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
{
    tableName: 'Categorias',
    timestamps: false
}
);

//Defincion del modelo de la entidadad Editoriales
const Editorial = sequelize.define('Editorial', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categorias', // Nombre de la tabla referenciada
            key: 'id' // Clave primaria de la tabla referenciada
        }
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    pais: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    fecha_fundacion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
{
    tableName: 'Editoriales', // Nombre de la tabla en la base de datos
    timestamps: false
}
);


module.exports = { 
    sequelize,
    Cliente,
    Pedido,
    Libro, 
    Autor,
    Categoria,
    Editorial

};