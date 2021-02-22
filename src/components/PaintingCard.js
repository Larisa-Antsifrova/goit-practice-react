import React from "react";
// Importing default image from image file: contains the path to the image
import defaultImg from "./default.jpg";

const PaintingCard = ({ url, title, author, quantity, price }) => (
  <div className="paintingCard">
    <img src={url} alt={title} width="400" />
    <h2>{title}</h2>
    <p>
      By <a href={author.url}>{author.tag}</a>
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

export default PaintingCard;
