import { GET_PRODUCTS, SHOW_PRODUCTS } from './types'
import { dispatch } from 'rxjs/internal/observable/range';

export const getProducts = (product) => async dispatch => {
    try {
        debugger
        const url = `http://localhost:8080/products/${product}`
        const response = await fetch(url);
        const responseJson = await response.json()
        console.log(responseJson)
        dispatch({
            type: GET_PRODUCTS,
            payload: responseJson
        })
    }
    catch (error) {
        throw error
    }
}

export const showProducts = () => async dispatch => {
    const url = `http://localhost:8080/products/mesa`
    const response = await fetch(url);
    const responseJson = await response.json()
    console.log(responseJson)
    dispatch({
        type: GET_PRODUCTS,
        payload: responseJson
    })
}