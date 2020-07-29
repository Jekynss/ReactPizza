import React from 'react'

import {Categories, Popup, PizzaBlock} from '../components'; // Если папка Header то ищет index.jsx

function Home({items}){
    return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={(name)=>console.log(name)} items={['Мясные','Вегетарианская','Гриль','Острые','Закрытые']}/>
        <Popup items={[{name: 'популярности', type:"popular"},{name:'цене', type:"price"},{name:'алфавиту', type:"abc"}]}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items&&items.map((item)=>(<PizzaBlock key={`${item.id}`} {...item}></PizzaBlock>))}
      </div>
    </div>);
}

export default Home;