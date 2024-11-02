import React from 'react';

const ListadoPlayers = ({ lista }) => {
  
  console.log(lista);
  console.log(typeof lista);
  return (
    <div className="container mt-3">
      <h3>Jugadores</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Número</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Apodo</th>
            <th>Edad</th>
            <th>Dirección IP</th>
          </tr>
        </thead>
        <tbody>
          <tr key={'0'}>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>  
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPlayers;
