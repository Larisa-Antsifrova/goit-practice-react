const PaintingCard = ({ painting }) => (
  <div className="paintingCard">
    <img src={painting.url} alt={painting.title} width="400" />
    <h2>{painting.title}</h2>
    <p>
      By <a href={painting.author.url}>{painting.author.tag}</a>
    </p>
    <p>Price: {painting.price}</p>
    <p>Available: {painting.quantity < 10 ? "Few left" : "In stock"}</p>
    <button type="button">Add to my cart</button>
  </div>
);

export default PaintingCard;
