import { GET_PRODUCTS, SHOW_PRODUCTS, CHANGE_SEARCHBOX, SHOW_ITEM, SET_ITEM, CLEAN_PRODUCTS, CLEAN_ITEMS } from './types'
import axios from 'axios';


export const getProducts = (product) => async dispatch => {
    try {
        if (product === undefined) {
            product = 'mesa'
        }
        const url = `https://mercado-libre-desafio.herokuapp.com/products/${product}`
        const response = await axios({
            method: 'get',
            baseURL: url,
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        const { data } = await response
        dispatch({
            type: GET_PRODUCTS,
            payload: data
        })
    }
    catch (error) {
        throw error
    }
}

export const showProducts = () => {
    return {
        type: SHOW_PRODUCTS,
    }
}

export const changeSearchBoxValue = (value) => {
    return {
        type: CHANGE_SEARCHBOX,
        payload: value
    }
}

export const getItemDetail = (id) => async dispatch => {
    try {
        const url = `https://mercado-libre-desafio.herokuapp.com/${id}/description`
        const response = await axios({
            method: 'get',
            baseURL: url,
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
        const { data } = await response
        dispatch({
            type: SHOW_ITEM,
            payload: data
        })
    }
    catch (error) {
        throw error
    }
}

export const setItemDetail = (id) => {
    return {
        type: SET_ITEM,
        payload: id
    }
}

export const cleanProducts = () => {
    return {
        type: CLEAN_PRODUCTS,
    }
}

export const cleanItems = () => {
    return {
        type: CLEAN_ITEMS,
    }
}


