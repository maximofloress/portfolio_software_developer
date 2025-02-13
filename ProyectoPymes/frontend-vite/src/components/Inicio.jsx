function Inicio() {
    return (
       <div className="mt-6 p-5 rounded" style={{backgroundColor:"lightblue"}} >
          <h1>Pymes 2024</h1>
          <p>Este ejemplo está desarrollado con las siguientes tecnologías:</p>
          <p>
            Backend: NodeJs, Express , WebApiRest, Swagger, Sequelize, Sqlite y 
            múltiples capas en Javascript.
          </p>
          <p>
            Frontend: Single Page Aplication, HTML, CSS, Bootstrap, NodeJs,
            Javascript y React.
          </p>
          <button className="btn btn-lg btn-primary">
            <i className="fa fa-search"> </i>
            Ver Articulos Familias
          </button>
        </div>
    );
  }
  export { Inicio };
  