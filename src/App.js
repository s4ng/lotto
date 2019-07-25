import React from 'react';
import Number from './number/number.js';
import Button from './button/button.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Number className="numbers"/>
      <Button className="button"/>
      <div className="divider"></div>
    </div>
  );
}

export default App;
