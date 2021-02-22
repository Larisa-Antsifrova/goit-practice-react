import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// // Commented initial App render
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // Using React createElement to create an Element
// const link = React.createElement(
//   "a",
//   { href: "https://reactjs.org/docs/create-a-new-react-app.html" },
//   "Yep, I am an element!"
// );
// console.log(link);
// ReactDOM.render(link, document.getElementById("root"));

// // Using JSX to create an element
// const jsxLink = <a href="https://reactjs.org/docs/create-a-new-react-app.html">I am JSX link</a>;
// console.log(jsxLink);
// ReactDOM.render(jsxLink, document.getElementById("root"));

const painting = {
  id: "id-1",
  url: "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
  title: "Feathers. Art abstract",
  price: 500,
  author: {
    tag: "ractapopulous",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 10,
};

const paintingTemplate = (
  <div className="container">
    <div className="paintingCard">
      <img
        src="https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg"
        alt="Feathers. Art abstract"
        width="400"
      />
      <h2>Feathers. Art abstract</h2>
      <p>Price: 500</p>
      <button type="button">Add to my cart</button>
    </div>
  </div>
);

ReactDOM.render(paintingTemplate, document.getElementById("root"));
