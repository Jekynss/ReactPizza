import React from 'react'

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

function cart(state = initialState, action) {
    switch(action.type){
      case 'ADD_PIZZA_CART': {
          const newItems = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id] ? 
                [action.payload] : 
                [
                ...state.items[action.payload.id],
                action.payload
                ]
        };
        const pizzasCount = [].concat.apply([],Object.values(newItems));
        const totalPrice = pizzasCount.reduce((accum, pizza) => (accum + pizza.price), 0);

        return{
            ...state,
            items: newItems,
            totalCount: pizzasCount.length,
            totalPrice,
        }
      }
     
    default: return state; 
    }
  }

export default cart;