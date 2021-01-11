import Axios from "axios";

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload,
});

export const setPizzas = (pizzas) =>({
    type: 'SET_PIZZAS',
    payload: pizzas,
    isLoaded: false,
});

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
        dispatch(setLoaded(false));
        Axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=asc`).then(({ data }) => {
          dispatch(setPizzas(data));
        });
};