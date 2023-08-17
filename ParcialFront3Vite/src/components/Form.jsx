import React, { useState } from 'react';

const Form = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [damageType, setDamageType] = useState('');
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length < 3 || name[0] == " " || damageType.length < 6) {
        setError(true)
    } else {
      onFormSubmit(name, damageType);
      setName('');
      setDamageType('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameInput">Nombre del personaje:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label htmlFor="damageTypeInput">Tipo de daño:</label>
      <input
        type="text"
        id="damageTypeInput"
        value={damageType}
        onChange={(e) => setDamageType(e.target.value)}
        required
      />

      <button type="submit">Enviar</button>
      {error && <h3 >Por favor chequea que la información sea correcta</h3>}
    </form>
  );
};

export default Form;