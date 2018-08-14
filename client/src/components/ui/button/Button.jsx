import React from 'react';

import './Button.scss';

const Button = ({children, ...rest}) => {
  return (
    <button {...rest} className="button">
      {children}
    </button>
  );
};

export default Button;