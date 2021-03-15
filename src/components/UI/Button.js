import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={[classes.Button, classes.smallBtn].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
