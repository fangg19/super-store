import classes from './Card.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';
import Rating from './Rating';

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <img src={props.img} alt={props.title} />
      <p>
        <strong>{props.title}</strong>
      </p>
      <Rating stars={props.rating} />
      <p>{props.rating}</p>
      <h2>{props.price}</h2>
      {props.onSale ? <div className={classes.OnSale}>ON SALE</div> : null}
      <Button>View Item</Button>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.string,
  onSale: PropTypes.bool,
};

export default Card;
