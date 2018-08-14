import React from 'react';

import './Input.scss';

const Input = ({input,
  label,
  type,
  id,
  meta: { touched, error, warning }
}) => {
  let borderClass = '';
  if (touched) {
    if (error) {
      borderClass = 'input__border--error'
    } else {
      borderClass = 'input__border--success'
    }
  }
  return (
    <div className="input">
      <input {...input} 
        placeholder={label}
        type={type}
        id={id}
        className="input__field"
      />
      <span className={'input__border ' + borderClass}></span>
      <span className="input__error">{touched && error ? error : ''}</span>
      <label 
        className="input__label"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;