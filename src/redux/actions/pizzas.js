import Axios from "axios";

export const setPizzas = (pizzas) =>({
    type: 'SET_PIZZAS',
    payload: pizzas,
    isLoaded: false,
});

export const fetchPizzas = async (dispatch) => {
        Axios.get("http://localhost:3001/pizzas").then(({ data }) => {
          dispatch(setPizzas(data));
        });
};