import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import menuData from "./data";
console.log(menuData);
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
        {menuData.map(({photoName,ingredients,foodName}) => (
          <Food photoName={photoName} ingredients={ingredients} foodName={foodName} />
        ))}
      </div>
    </main>
  );
};
const Food = function ({photoName,ingredients,foodName}) {
  return (
    <div className="food">
      <img src={photoName} alt={foodName} />
      <div>
        <h3>{foodName}</h3>
        <p>{ingredients}</p>
      </div>
    </div>
  );
};
const Foodyy = function () {
  return (
    <div className="food">
      <img src="menu/corn.jpg" alt="corn" />
      <div>
        <h3>corn</h3>
        <p>recipe</p>
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
