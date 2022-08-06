import { AnyAction, combineReducers } from "redux";
import * as actionTypes from './constants'

const initalState = {
    loading: true,
    goods: []
}

const loadingReducer = (state = initalState.loading, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return action.data
        default:
            return state
    }
}

const goodsReducer = (state = initalState.goods, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_GOODS:
            return {
                ...state,
                goods: action.data
            }

        default:
            return state
    }
}

export default combineReducers({
    loading: loadingReducer,
    goods: goodsReducer
})