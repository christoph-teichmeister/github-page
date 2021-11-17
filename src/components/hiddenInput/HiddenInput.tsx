import './HiddenInput.css'
import React, {useState} from 'react';

type HiddenInputPropsType = {};

export const HiddenInput = (props: HiddenInputPropsType) => {
  const [userInputValue, setUserInputValue] = useState<string>()

  const handleInputKeyPress = e => {
    if (e.key === 'Enter' && userInputValue === 'hello_world') {
      alert('Hello :)')
    }
  }

  return (
    <>
      <div className='align-left hidden-input-font'>
        <input
          autoFocus
          className='hide-this-input'
          type="text"
          onChange={event => setUserInputValue(event.target.value)}
          onKeyPress={e => handleInputKeyPress(e)}
          value={userInputValue}
        />
        <span className='blink margin-left'>_</span>
        <span className='margin-left'>{' <'}</span>
      </div>
    </>
  );
};