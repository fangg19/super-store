import React from 'react';
import Items from '../containers/Items';

const Deals = (props) => {
  return (
    <div>
      <h1>Deals page.</h1>
      {props.onSale ? <Items /> : null}
    </div>
  );
};

export default Deals;
