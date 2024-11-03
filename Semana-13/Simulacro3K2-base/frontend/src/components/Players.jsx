import React, { useForm } from 'react-hook-form';
import { useState} from 'react';
import ListadoPlayers from './ListadoPlayers';
import playersService from '../services/players.service';

const Players = () => {
  const [lista, setLista] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const players = await playersService.getByFilters(data)
    setLista(players);
  };

  return (
    <div className="container">
      <h1>Formulario de Búsqueda</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Filtro:</label>
              <input type="text" className="form-control" {...register('filtro', { required: 'Este campo es requerido' })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Orden:</label>
              <select className="form-select" {...register('orden')}>
                <option value="full_name">Nombre</option>
                <option value="nickname">Apodo</option>
                <option value="id">Número</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
          </form>
        </div>
      </div>
      
      <ListadoPlayers lista={lista} />
    </div>
  );
};

export default Players;
