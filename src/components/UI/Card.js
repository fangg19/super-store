import classes from './Card.module.css';
import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <img className={classes.ProductImage} src={props.img} alt={props.title} />
      <p>
        <strong>{props.title}</strong>
      </p>

      <div className={classes.Rating}>
        <Rating stars={props.rating} />

        <p> {props.rating}</p>
      </div>

      <div className={classes.Price}>
        <h2>{props.price}</h2>
        {props.onSale ? <div className={classes.OnSale}>On Sale</div> : null}
      </div>

      <button className={classes.Btn}>View Item</button>
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
