import React from 'react'

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

function cart(state = initialState, action) {
    switch(action.type){
      case 'ADD_PIZZA_CART': {
        const currentPizzaItems = !state.items[action.payload.id] 
          ? [action.payload]
          : [...state.items[action.payload.id].items, action.payload];

          const newItems = {
            ...state.items,
            [action.payload.id]: {
              items: currentPizzaItems,
              totalPrice: currentPizzaItems.reduce((accum, pizza) => (accum + pizza.price), 0),
              totalCount: currentPizzaItems.length
            }
        };

        const items = Object.values(newItems).map(obj => obj.items);
        const pizzasCount = [].concat.apply([], items);
        const totalPrice = pizzasCount.reduce((accum, pizza) => (accum + pizza.price), 0);

        return{
            ...state,
            items: newItems,
            totalCount: pizzasCount.length,
            totalPrice,
        }
      }
      case 'CLEAR_CART':
        return {
          totalPrice: 0,
          totalCount: 0,
          items: {},
        }
      case 'CLEAR_CART':{
        const newItems = {
          ...state.items
        };
        delete newItems[action.payload];
        return {
          newItems
        }
      }
     
    default: return state; 
    }
  }

export default cart;