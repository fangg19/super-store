import React, { useState, useEffect } from 'react';
import classes from './Items.module.css';
import axios from 'axios';
import Card from '../components/UI/Card';

const Items = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        'https://gp-super-store-api.herokuapp.com/item/list'
      );
      setItems(res.data.items);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className={classes.Items}>
      {loading ? (
        <h3>Please wait for the items to load...</h3>
      ) : (
        items.map((item) => {
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
        })
      )}
    </div>
  );
};

export default Items;
