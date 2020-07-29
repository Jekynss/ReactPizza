import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux'


import './scss/app.scss';

import App from './App';

//import * as serviceWorker from './serviceWorker';

  // function counter(state = 0, action) {
  //   switch (action.type) {
  //     case 'INCREMENT':
  //       return state + 1
  //     case 'DECREMENT':
  //       return state - 1
  //     default:
  //       return state
  //   }
  // }

  // function rootReducer (state = 0, action){
  //   counter(state,action);
  //   counter2(state,action);
  // }
  // const store = createStore(counter);

  // store.subscribe(()=>console.log(store.getState()));

  // store.dispatch({type:'INCREMENT'});

  // console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      {console.log(store.getState())}
      <App></App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
