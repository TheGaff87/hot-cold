import React from 'react';

export default function Feedback(props) {
    return (
        <div className="feedback">
            <p>Your guess is: {props.text}</p>
        </div>
    )
}
