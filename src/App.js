import "./App.css";
import PaintingCard from "./components/PaintingCard";
import paintings from "./paintings.json";

// Data model example
console.log("paintings json", paintings);
const painting = {
  id: "id-1",
  url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  title: "Feathers. Art abstract",
  price: 600,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 10,
};

// Adding Painting Card component into App
function App() {
  return (
    <div className="container">
      <PaintingCard
        url={painting.url}
        title={painting.title}
        author={painting.author}
        quantity={painting.quantity}
        price={painting.price}
      />
    </div>
  );
}

export default App;
