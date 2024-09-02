import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const App = function () {
  return (
    <div className="container">
      <Header />
      <Menu/>
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
const Menu=function(){
  return<main className="menu">
    <h2> Our Menu speaks</h2>
<Food/>
  </main>
}
const Food=function(){
  return<div>
    <img src='./menu/corn.jpg' alt='corn menu'/>
    <h3>This menu consist of sweet corn and freshly plucked cucumber and a big green pepper to garnish</h3>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
