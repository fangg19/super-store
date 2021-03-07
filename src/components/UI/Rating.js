import React from 'react';

const Rating = (props) => {
  return (
    <div>
      {props.stars > 0 ? (
        <img src="https://guidedprojects.dev/assets/files/star_full-f757f2a6eb46312ac3b0a9f4923add12.svg" />
      ) : null}
    </div>
  );
};

export default Rating;
