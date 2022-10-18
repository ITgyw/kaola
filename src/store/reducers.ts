// import { any } from "prop-types";
import { AnyAction, combineReducers } from "redux";
import * as actionTypes from './constants'

const initalState = {
    loading: true,
    good: {
        goods: [],
        goodspart: []
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
            // console.log(list, '-------');
            return Object.assign({}, state, {
                goods: list
            })
            break;
        case actionTypes.SET_ISCAR:
            let iscarList = state.goods;
            iscarList.map((item: any) => (
                item.data.map((item2: any) => {
                    if (item2.goodsId == action.data) {
                        item2.isCar = true;
                    }
                })
            ))            
            return Object.assign({}, state, {
                goods: iscarList
            })
            break;
        case actionTypes.SET_CHECK:
            let checkList = state.goodspart;
            checkList.map((item: any) => {
                if (item.goodsId == action.data) {
                    item.check = !item.check;
                }
            })
            return Object.assign({}, state, {
                goodspart: [...checkList]
            })
            break;
        case actionTypes.SET_COUNTS:
            let countList = state.goodspart;
            countList.map((item: any) => {
                if (item.goodsId == action.data.goodsId) {
                    action.data.status == 'add' ? item.counts++ : item.counts--;
                    item.counts == '0' ? item.check = false : ''
                }
            })
            return Object.assign({}, state, {
                goodspart: [...countList]
            })
            break;
        case actionTypes.DELETE_ITEM:
            let deleteList = state.goodspart;
            deleteList.map((item:any) => {
                if(item.goodsId == action.data) {
                    item.check = false,
                    item.isCar = false,
                    item.counts = 1
                }
            })
            return Object.assign({}, state, {
                goodspart: [...deleteList]
            })
            break;
        case actionTypes.SET_ALL_CHECK:
            let checkAllList = state.goodspart
            checkAllList.map((item: any) => {
                item.check = !action.data
            })
            return Object.assign({}, state, { goodspart: [...checkAllList] })
            break;
        case actionTypes.SET_GOODS_PART:
            let goodspartList = action.data
            // console.log(goodspartList, '///');
            const arr = [];
            for (let i = 0; i < goodspartList.length; i++) {
                for (let j = 0; j < goodspartList[i].data.length; j++) {
                    arr.push(goodspartList[i].data[j])
                }
            }
            arr.map((item: any) => (
                item.check = false,
                item.isCar = false,
                item.counts = 1

            ))
            return Object.assign({}, state, {
                goodspart: arr
            })

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