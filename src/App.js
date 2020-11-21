import React from "react";
import Axios from "axios";

import { Header } from "./components"; // Если папка Header то ищет index.jsx
import { setPizzas } from "./redux/actions/pizzas";

import { Home, Cart } from "./pages"; // Если папка Header то ищет index.jsx
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import store from "./redux/store";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    Axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  },[]);

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
