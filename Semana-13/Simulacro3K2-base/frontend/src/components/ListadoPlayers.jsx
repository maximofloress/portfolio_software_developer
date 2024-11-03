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
          {lista && lista.map((item, index) => {
            return (
              <tr key={'player-' + index}>
                <td><img src={item.avatar} alt={`Avatar of ${item.full_name}`} width="50" height="50" /></td>
                <td>{item.id}</td>
                <td>{item.full_name}</td>
                <td>{item.email}</td>
                <td>{item.nickname}</td>
                <td>{item.age}</td>
                <td>{item.ip_address}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoPlayers;
