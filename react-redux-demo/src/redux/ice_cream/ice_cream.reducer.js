import { BUY_ICECREAM } from './ice_cream.types'

const initialState = {
    numOfIcecream: 10
}

const icecreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }

        default: return state
    }
}

export default icecreamReducer