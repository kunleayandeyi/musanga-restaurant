import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const App = function () {
  return (
    <div className="container">
      <Header />
      <Menu />
    </div>
  );
};
const Header = function () {
  return (
    <header className="header">
      <h1>Musanga</h1>
    </header>
  );
};
const Menu = function () {
  return (
    <main className="menu">
      <h2> Our Menu speaks</h2>
      <div className="foods">
        <Food
          recipe="This menu consist of sweet corn and freshly plucked cucumber and a big
        green pepper to garnish"
          foodName="Corn chorizo"
          foodImage="./menu/corn.jpg"
        />
        <Food
          recipe="This menu consist of rice and  fresh vegetables"
          foodName="smokky fried rice"
          foodImage="./menu/fried_rice.jpg"
        />
        <Food
          recipe="This menu consist of rice and fresh prawns and fried chicken garnished with goat meat"
          foodName="Nigerian party Jollof Rice "
          foodImage="./menu/jollof_rice.jpg"
        />
        <Food
          recipe="This menu consist of freshly baked margherita pizza garnished with mushroom and meaty beef"
          foodName="Margherita pizza"
          foodImage="./menu/margherita.jpg"
        />
        <Food
          recipe="This menu consist of roasted plantain garnished with chili pepper"
          foodName="Roasted plantain"
          foodImage="./menu/plantain.jpg"
        />
        <Food
          recipe="This menu consist of white  rice and chicken"
          foodName="rice and chicken curry"
          foodImage="./menu/rice.jpg"
        />
      </div>
    </main>
  );
};
const Food = function ({ recipe, foodName, foodImage }) {
  return (
    <div className="food">
      <img src={foodImage} alt={foodName} />
      <div>
        <h3>{foodName}</h3>
        <p>{recipe}</p>
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
