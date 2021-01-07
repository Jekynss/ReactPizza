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

export const fetchPizzas = async (dispatch) => {
        dispatch(setLoaded(false));
        Axios.get("http://localhost:3001/pizzas").then(({ data }) => {
          dispatch(setPizzas(data));
        });
};