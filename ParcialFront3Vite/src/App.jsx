import React, { useState } from 'react';
import './App.css';
import Card from './components/Card'
import Form from './components/Form'

function App() {
  const [showCard, setShowCard] = useState(false);
  const [characterName, setCharacterName] = useState('');
  const [damageType, setDamageType] = useState('');

  const handleFormSubmit = (name, type) => {
    setCharacterName(name);
    setDamageType(type);
    setShowCard(true);
  };

  return (
    <div className="App">
      <h1>Formulario de Personajes de League of Legends</h1>
      <Form onFormSubmit={handleFormSubmit} />
      {showCard && <Card name={characterName} damageType={damageType} />}
    </div>
  );
}

export default App;
