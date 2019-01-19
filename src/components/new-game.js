import React from 'react';

export default function NewGame(props) {
    return (
        <button className='new-game' onClick={props.onClick}>Start New Game</button>
    )
}