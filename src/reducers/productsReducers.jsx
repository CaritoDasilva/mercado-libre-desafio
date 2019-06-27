import { GET_PRODUCTS, SHOW_PRODUCTS } from '../actions/types'

const initialState = {
    products: [],
    searchBox: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SHOW_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}