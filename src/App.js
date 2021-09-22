import './App.css';
import React from 'react';
import APOD from './components/APOD';

function App() {


  return (
    <div className='App'>
      <div className="header">
      <h1>NASA API Shopify Challenge</h1>
      </div>
      <APOD />
    </div>
  );
}

export default App;
