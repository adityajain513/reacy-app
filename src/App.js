import React from 'react';
import Counter from './features/counter/counter';
import './App.css';
import Coin from './features/coin/coin';
import Theme from './features/theme/Theme';
function App() {
  return (
    <div className="App">
      <Counter/>
      <Coin/>
      <Theme/>
      
    </div>
  );
}

export default App;
