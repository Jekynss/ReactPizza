import React from "react";

import {
  Categories,
  Popup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components"; // Если папка Header то ищет index.jsx
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryItems = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const popupItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategoty = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const OnAddPizza = React.useCallback((pizza) => {
    console.log(pizza);
    dispatch(addPizzaToCart(pizza));
  }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategoty}
          items={categoryItems}
        />
        <Popup
          activeSortItem={sortBy}
          items={popupItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items?.map((item) => (
              <PizzaBlock
                key={`${item.id}`}
                {...item}
                OnAddPizza={OnAddPizza}
                addedCount={cartItems[item.id]?.items?.length}
              ></PizzaBlock>
            ))
          : Array(4)
              .fill(0)
              .map((elem, index) => (
                <PizzaLoadingBlock key={index}></PizzaLoadingBlock>
              ))}
      </div>
    </div>
  );
}

export default Home;
