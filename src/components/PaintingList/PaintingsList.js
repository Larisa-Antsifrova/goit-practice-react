import React from 'react';
import PaintingCard from '../PaintingCard/PaintingCard';
import PropTypes from 'prop-types';

import './PaintingList.css';

// Creating Painting list component
const PaintingList = ({ paintings }) => {
  return (
    <ul className="PaintingList">
      {paintings.map(
        ({
          id,
          url,
          title,
          author: { tag, url: authorUrl },
          quantity,
          price,
        }) => (
          <PaintingCard
            key={id}
            url={url}
            title={title}
            quantity={quantity}
            price={price}
            tag={tag}
            authorUrl={authorUrl}
          />
        ),
      )}
    </ul>
  );
};

// Assigning Painting list properties types
PaintingList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PaintingList;
