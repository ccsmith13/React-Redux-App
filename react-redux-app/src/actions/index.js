import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DOG = "UPDATE_DOG";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    setTimeout(() => {
        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then(res => {
                //console.log('dog get request result', res);
                dispatch({ type: UPDATE_DOG, payload: res.data.message })
            })
            .catch(err => {
                console.log('error', err)
                dispatch({ type: SET_ERROR, payload: "error fetching data from api" })
            })
    }, 2000);
};