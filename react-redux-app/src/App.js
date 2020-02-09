import React from 'react';
import './App.css';
import DogCard from './components/DogCard';
import DogRefresh from './components/DogRefresh';

function App() {
  return (
    <div className="App">
      <div className="Body">
        <h1>Another Dog App!</h1>
        <DogCard />
        <DogRefresh />
      </div>
    </div>
  );
}

export default App;
