import React from 'react';
import './App.css';
import DogCard from './components/DogCard';
import DogRefresh from './components/DogRefresh';

function App() {
  return (
    <div>
      <h1>Another Dog App!</h1>
      <DogCard />
      <DogRefresh />
    </div>
  );
}

export default App;
