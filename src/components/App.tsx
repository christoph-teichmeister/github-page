import React from 'react';
import './App.css';

import {Centered} from "./shared/Centered";
import {CustomTextScrambler} from "./customTextScrambler/CustomTextScrambler";
import {HiddenInput} from "./hiddenInput/HiddenInput";

function App() {
  return (
    <div className='App'>
      <HiddenInput/>
      <Centered>
        <CustomTextScrambler/>
      </Centered>
    </div>
  );
}

export default App;
