import classes from './Card.module.css';
import React from 'react';
import Button from './Button';

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <img src={props.img} alt="image" />
      <p>
        <strong>{props.title}</strong>
      </p>

      <p>{props.rating}</p>

      <h2>{props.price}</h2>
      {props.onSale ? <div className={classes.OnSale}>ON SALE</div> : null}
      <Button>View Item</Button>
    </div>
  );
};

export default Card;
