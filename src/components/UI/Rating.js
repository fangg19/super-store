import React from 'react';

const Rating = (props) => {
  const rating = props.stars;
  const fullStar = (
    <img
      src="https://guidedprojects.dev/assets/files/star_full-f757f2a6eb46312ac3b0a9f4923add12.svg"
      alt="Full Star Rating"
    />
  );
  const halfStar = (
    <img
      src="https://guidedprojects.dev/assets/files/star-half-c86abc67a14feafe9a821fd5e06e5833.svg"
      alt="Half Star Rating"
    />
  );
  const emptyStar = (
    <img
      src="https://guidedprojects.dev/assets/files/star-empty-849812a23c4515e156571518674ae723.svg"
      alt="Empty Star Rating"
    />
  );

  return (
    <div>
      {
        <span>
          {rating >= 1 ? fullStar : rating >= 0.5 ? halfStar : emptyStar}
        </span>
      }
      {
        <span>
          {rating >= 2 ? fullStar : rating >= 1.5 ? halfStar : emptyStar}
        </span>
      }
      {
        <span>
          {rating >= 3 ? fullStar : rating >= 2.5 ? halfStar : emptyStar}
        </span>
      }
      {
        <span>
          {rating >= 4 ? fullStar : rating >= 3.5 ? halfStar : emptyStar}
        </span>
      }
      {
        <span>
          {rating >= 5 ? fullStar : rating >= 4.5 ? halfStar : emptyStar}
        </span>
      }
    </div>
  );
};

export default Rating;
