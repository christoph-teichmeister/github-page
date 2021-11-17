import './CustomTextScrambler.css'
import React from 'react';
import 'react-scramble-text/dist/index.css'
import TextScrambler from 'react-scramble-text'

type CustomTextScramblerPropsType = {
  phrases?: String[],
  speed?: number
  pauseTime?: number
};

export const CustomTextScrambler = (props: CustomTextScramblerPropsType) => {
  const defaultPhrases = ['Hey there', 'Welcome to my page :)', 'More to be added soon!', '🍻']
  const defaultSpeed = 50
  const defaultPauseTime = 1000

  const {phrases = defaultPhrases, speed = defaultSpeed, pauseTime = defaultPauseTime} = props

  return (
    <span className='text-scrambler-font'>
      <TextScrambler
        phrases={phrases}
        speed={speed}
        pauseTime={pauseTime}/>
    </span>
  );
};