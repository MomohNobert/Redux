import { combineReducers } from 'redux'
import cakeReducer from './cake/cake.reducer';
import icecreamReducer from './ice_cream/ice_cream.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer,
    user: userReducer
})

export default rootReducer