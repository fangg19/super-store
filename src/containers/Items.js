import React, { useState, useEffect } from 'react';
import classes from './Items.module.css';
import axios from 'axios';
import Card from '../components/UI/Card';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        'https://gp-super-store-api.herokuapp.com/item/list'
      );
      console.log(res.data.items);
      setItems(res.data.items);
    }

    fetchData();
  }, []);

  return (
    <div className={classes.Items}>
      {items.map((item) => {
        return (
          <Card
            key={item._id}
            img={item.imageUrl}
            title={item.name}
            rating={item.avgRating}
            price={`$ ${item.price}`}
            onSale={item.isOnSale}
          />
        );
      })}
    </div>
  );
};

export default Items;
