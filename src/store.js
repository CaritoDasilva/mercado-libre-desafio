import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'



const middleware = [thunk];



const stateInitial = {};





//Store(Contiene el state de la aplicación) y Create Store
const store = createStore(rootReducer, stateInitial, compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));


export default store;