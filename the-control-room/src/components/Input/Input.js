import React from 'react';
import './Input.scss';

const Input = ({name, type, text, setValue, value, required, step, size}) => {


  return(
    <div className={'input-box ' + 'input-box-' + size}>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={name} required={required} onChange={(e) => setValue(e.target.value)} step={step} value={value}></input>
    </div>
  )
}

export default Input;
