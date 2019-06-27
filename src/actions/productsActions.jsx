import { GET_PRODUCTS, SHOW_PRODUCTS } from './types'
import axios from 'axios';


export const getProducts = (product) => async dispatch => {
    try {
        debugger
        const url = `https://localhost:8080/products/${product}`
        const response = await axios({
            method: 'get',
            baseURL: url,

            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
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
    try {
        debugger
        const url = `http://localhost:8080/products/mesa`
        const response = await axios({
            method: 'get',
            baseURL: url,

            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
            // url: '/login/authentication',
            // data: {
            //     email: email,
            //     password: password
            // }
        })


        const { data } = await response
        console.log(data)
        dispatch({
            type: SHOW_PRODUCTS,
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}

