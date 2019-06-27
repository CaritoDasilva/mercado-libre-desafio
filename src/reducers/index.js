import { combineReducers } from 'redux'
import productReducers from '../reducers/productsReducers'


export default combineReducers({
    products: productReducers
})