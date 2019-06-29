import { GET_PRODUCTS, SHOW_PRODUCTS, CHANGE_SEARCHBOX, SHOW_ITEM, SET_ITEM } from '../actions/types'

const initialState = {
    products: [],
    searchBox: '',
    item: {},
    itemId: ''
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
            }
        case CHANGE_SEARCHBOX:
            return {
                ...state,
                searchBox: action.payload
            }
        case SHOW_ITEM:
            return {
                ...state,
                item: action.payload
            }
        case SET_ITEM:
            return {
                ...state,
                itemId: action.payload
            }
        default:
            return state;
    }
}