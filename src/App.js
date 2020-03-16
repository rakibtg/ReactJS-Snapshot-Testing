import React from 'react';
import './App.css';
import Items from './items/Items'

const itemsArray = [
  'Sun', 'Earth', 'Moon', 'Saturn'
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn Snapshot Testing</h1>
        <Items items={itemsArray} />
        <h3>
          Subscribe and follow @rakibtg
        </h3>
      </header>
    </div>
  );
}

export default App;