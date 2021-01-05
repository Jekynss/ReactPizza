import React from "react";

import { Header } from "./components"; // Если папка Header то ищет index.jsx

import { Home, Cart } from "./pages"; // Если папка Header то ищет index.jsx
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="content">
        <Route
          path="/"
          component={Home}
          exact
        />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

// class App extends React.Component {
export default App;
