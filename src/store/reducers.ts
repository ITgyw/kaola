import { AnyAction, combineReducers } from "redux";
import * as actionTypes from './constants'

const initalState = {
    loading: true,
    good: {
        goods: []
    },
    navbar: {
        navbars: []
    }
}

const loadingReducer = (state = initalState.loading, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return action.data
        default:
            return state
    }
}

const goodsReducer = (state = initalState.good, action: AnyAction) => {
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

const navbarsReducer = (state = initalState.navbar, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_NAVBARS:
            return {
                ...state,
                navbars: action.data
            }
        default:
            return state
    }
}

export default combineReducers({
    loading: loadingReducer,
    good: goodsReducer,
    navbar: navbarsReducer
})