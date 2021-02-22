import React from "react";
import PropType from "prop-types";
// Importing default image from image file: contains the path to the image
import defaultImg from "./default.jpg";

const PaintingCard = ({ url, title, tag, authorUrl, quantity, price }) => (
  <div className="paintingCard">
    <img src={url} alt={title} width="400" />
    <h2>{title}</h2>
    <p>
      By <a href={authorUrl}>{tag}</a>
    </p>
    <p>Price: {price}</p>
    <p>Available: {quantity < 10 ? "Few left" : "In stock"}</p>
    <button type="button">Add to my cart</button>
  </div>
);

// Assigning default values to properties
PaintingCard.defaultProps = {
  url: defaultImg,
};

// Designating property types
PaintingCard.propTypes = {
  url: PropType.string,
  title: PropType.string.isRequired,
  tag: PropType.string.isRequired,
  authorUrl: PropType.string.isRequired,
  quantity: PropType.number.isRequired,
  price: PropType.number.isRequired,
};

export default PaintingCard;
