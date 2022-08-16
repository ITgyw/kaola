import { any } from "prop-types";
import { AnyAction, combineReducers } from "redux";
import * as actionTypes from './constants'

const initalState = {
    loading: true,
    good: {
        goods: []
    },
    navbar: {
        navbars: []
    },
    detail: {
        details: []
    },
    siderbar: {
        siderbars: []
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
            let list = action.data;
            list.map((item: any) => (
                item.data.map((item2: any) => (
                    item2.check = false,
                    item2.isCar = false,
                    item2.counts = 1
                ))
            ))
            return Object.assign({}, state, {
                goods: list
            })
            break;
        case actionTypes.SET_ISCAR:
            let iscarList = state.goods;
            iscarList.map((item: any) => (
                item.data.map((item2: any) => {
                    if (item2.goodsId == action.data) {
                        item2.check = true;
                    }
                })
            ))
            return Object.assign({}, state, {
                goods: list
            })
            break;
        case actionTypes.SET_CHECK:
            let checkList = state.goods;
            checkList.map((item: any) => (
                item.data.map((item2: any) => {
                    if (item2.goodsId == action.data) {
                        item2.check = true;
                    }
                })
            ))
            return Object.assign({}, state, {
                goods: list
            })
            break;
        case actionTypes.SET_COUNTS:
            let countList = state.goods;
            countList.map((item: any) => {
                item.map((item2: any) => {
                    if (item2.goodsId == action.data.goodsId) {
                        action.data.status == 'add' ? item2.counts++ : item2.counts--;
                        item2.counts == '0' ? item2.check = false : ''
                    }
                })
            })
            return Object.assign({}, state, {
                goods: list
            })
            break;
        case actionTypes.SET_ALL_CHECK:
            let checkAllList = state.goods
            checkAllList.map((item: any) => {
                item.map((item2: any) => {
                    item2.check = !action.data
                })
            })
            return Object.assign({}, state, { goods: [...checkAllList] })
            break;
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
const detailsReducer = (state = initalState.detail, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_DETAIL:
            return {
                ...state,
                details: action.data
            }
        default:
            return state
    }
}
const siderbarsReducer = (state = initalState.siderbar, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_SIDERBARS:
            return {
                ...state,
                siderbars: action.data
            }
        default:
            return state
    }
}
export default combineReducers({
    loading: loadingReducer,
    good: goodsReducer,
    navbar: navbarsReducer,
    detail: detailsReducer,
    siderbar: siderbarsReducer
})