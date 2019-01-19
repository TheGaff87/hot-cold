import React from 'react';

export default function NumberInput(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input className='guess-field' type="number" id={props.id} min={props.min} max={props.max} value={props.value}
            onChange={props.onChange}
            />
        </div>
    );
}