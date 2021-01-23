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
      case 'REMOVE_CART_ITEM':{
        const newItems = {
          ...state.items
        };
        const currentTotalPrice = newItems[action.payload].totalPrice;
        const currentTotalCount = newItems[action.payload].items.length;
        delete newItems[action.payload];

        return {
          ...state,
          items: newItems,
          totalPrice: state.totalPrice - currentTotalPrice,
          totalCount: state.totalCount - currentTotalCount
        }
      }
      case 'PLUS_CART_ITEM':{
        const currentPizzaItems = [...state.items[action.payload].items, state.items[action.payload].items[0]];

          const newItems = {
            ...state.items,
            [action.payload]: {
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
      case 'MINUS_CART_ITEM':{
        const newItems = {
          ...state.items,
          [action.payload]: {
            items: state.items[action.payload].items,
            totalCount: state.items[action.payload].totalCount - 1,
            totalPrice: state.items[action.payload].totalPrice - state.items[action.payload].items[0].price
          }
        };
        const currentPrice = newItems[action.payload].items[0].price;
        newItems[action.payload].items.pop();
        console.log(newItems[action.payload]);

        return {
          ...state,
          items: newItems,
          totalPrice: state.totalPrice - currentPrice,
          totalCount: state.totalCount - 1,          
        }
      }
     
    default: return state; 
    }
  }

export default cart;