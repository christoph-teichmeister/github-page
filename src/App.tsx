import React from 'react';
import './App.css';

import TextScrambler from 'react-scramble-text'
import 'react-scramble-text/dist/index.css'

function App() {
  const phrases = ['Hey there', 'Welcome to my page :)', 'More to be added soon!', '🍻']
  return (
    <div className='App'>
      <header className='App-header'>
          <TextScrambler
              phrases={phrases}
              speed={50}
              pauseTime={1000}/>
      </header>
    </div>
  );
}

export default App;
