import React from 'react';

export default function PriorGuesses(props) {
    const guesses = props.guesses.map((guess, index) => (
      <span key={index}>
        {guess}
      </span>
    ));
  
    return (
      <div className='guesses'>
        {guesses}
      </div>
    );
  }
  
            
            
            
            
            
            