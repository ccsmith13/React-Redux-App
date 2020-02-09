import { FETCH_DATA, UPDATE_DOG, SET_ERROR } from '../actions';

const initialState = {
    dogImgUrl: "",
    isFetchingData: false,
    error: ""
}

export const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                dogImgUrl: ""
            };
        case UPDATE_DOG:
            return {
                ...state,
                dogImgUrl: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
    }
}