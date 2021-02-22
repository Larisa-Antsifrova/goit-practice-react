import React from "react";
import PropTypes from "prop-types";

// Importing default image from image file: contains the path to the image
import defaultImg from "./default.jpg";

// Creating Painting card component
const PaintingCard = ({ url, title, tag, authorUrl, quantity, price }) => (
  <li className="paintingCard">
    <img src={url} alt={title} width="400" />
    <h2>{title}</h2>
    <p>
      By <a href={authorUrl}>{tag}</a>
    </p>
    <p>Price: {price}</p>
    <p>Available: {quantity < 10 ? "Few left" : "In stock"}</p>
    <button type="button">Add to my cart</button>
  </li>
);

// Assigning default values to properties
PaintingCard.defaultProps = {
  url: defaultImg,
};

// Designating property types
PaintingCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default PaintingCard;
