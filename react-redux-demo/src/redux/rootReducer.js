import { combineReducers } from 'redux'
import cakeReducer from './cake/cake.reducer';
import icecreamReducer from './ice_cream/ice_cream.reducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
})

export default rootReducer