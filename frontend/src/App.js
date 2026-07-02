import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Pajamas from './components/Pajamas';
import Football from './components/Football';

function App() {
  const [activeTab, setActiveTab] = useState('pajamas');

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'pajamas' ? 'active' : ''}`}
            onClick={() => setActiveTab('pajamas')}
          >
            🛏️ البجامات (Pajamas)
          </button>
          <button
            className={`tab-btn ${activeTab === 'football' ? 'active' : ''}`}
            onClick={() => setActiveTab('football')}
          >
            ⚽ ملابس كرة القدم (Football)
          </button>
        </div>

        <div className="content">
          {activeTab === 'pajamas' && <Pajamas />}
          {activeTab === 'football' && <Football />}
        </div>
      </div>
    </div>
  );
}

export default App;