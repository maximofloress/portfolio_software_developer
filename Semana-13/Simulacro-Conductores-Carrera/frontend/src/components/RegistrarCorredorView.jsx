function RegistrarCorredoresView(){
    return (
        <div>
            <h1>Registrar Corredores</h1>
            <form>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" />
                <label htmlFor="edad">Edad:</label>
                <input type="number" id="edad" name="edad" />
                <label htmlFor="sexo">Sexo:</label>
                <input type="text" id="sexo" name="sexo" />
                <button>Registrar</button>
            </form>
        </div>
    );
}

export default RegistrarCorredoresView;