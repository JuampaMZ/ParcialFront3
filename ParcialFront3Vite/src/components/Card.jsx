import React from 'react';

const Card = ({ name, damageType }) => {
  return (
    <div className="card">
      <h2>Información del personaje:</h2>
      <p><strong>Nombre:</strong> {name}</p>
      <p><strong>Tipo de daño:</strong> {damageType}</p>
    </div>
  );
};

export default Card;