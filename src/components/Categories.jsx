import React from "react";
import classNames from "classnames";

const Categories = React.memo(({ activeCategory, items, onClickItem }) => {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickItem(null)}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickItem(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
