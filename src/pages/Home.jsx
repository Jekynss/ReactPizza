import React from "react";

import {
  Categories,
  Popup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components"; // Если папка Header то ищет index.jsx
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

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
  { name: "алфавиту", type: "abc" },
];

function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas);
  }, []);

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  const onSelectCategoty = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategoty} items={categoryItems} />
        <Popup items={popupItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items?.map((item) => (
              <PizzaBlock key={`${item.id}`} {...item}></PizzaBlock>
            ))
          : Array(10).fill(<PizzaLoadingBlock></PizzaLoadingBlock>)}
      </div>
    </div>
  );
}

export default Home;
