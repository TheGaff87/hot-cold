import React from 'react';

export default function Feedback(props) {
    return (
        <div className="feedback">
            <feedback id={props.id}>
                {props.text}
            </feedback>
        </div>
    )
}

Feedback.defaultProps = {
    text: "Make a guess"
}