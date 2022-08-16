import { Dispatch } from "react";
import * as actionTypes from '../constants'
import {
    getGoodsRequest,
    getNavbarsRequest,
    getDetailRequest,
    getSiderbarsRequest
} from '@/api/request'

export const getHomeDataAction = () => {
    return (dispatch: any) => {
        dispatch(setLoading(true))
        return Promise.all([
            getGoodsRequest(),
            getNavbarsRequest()
        ]).then(([goodsData, navbarsData]) => {
            dispatch(setgoods(goodsData.data))
            dispatch(setnavbars(navbarsData.data))
            dispatch(setLoading(false))
        })
    }
}
export const getDetailDataAction = (id: number) => {
    return (dispatch: any) => {
        dispatch(setLoading(true))
        return Promise.all([
            getDetailRequest(id)
        ]).then((goodsData) => {
            dispatch(setdetail(goodsData))
            dispatch(setLoading(false))
        })
    }
}

export const getSiderbarsDataAction = () => {
    return (dispatch: any) => {
        dispatch(setLoading(true))
        return getSiderbarsRequest()
            .then((siderbarsData) => {
                dispatch(setsiderbars(siderbarsData.data))
                dispatch(setLoading(false))
            })

    }
}
export const getShoppingCarDataAction = () => {
    return (dispatch: any) => {
        return
    }
}
export const setLoading = (data: boolean) => ({
    type: actionTypes.SET_LOADING,
    data
})

export const setgoods = (data: any[]) => ({
    type: actionTypes.SET_GOODS,
    data
})

export const setnavbars = (data: any[]) => ({
    type: actionTypes.SET_NAVBARS,
    data
})

export const setdetail = (data: any[]) => ({
    type: actionTypes.SET_DETAIL,
    data
})

export const setsiderbars = (data: any) => ({
    type: actionTypes.SET_SIDERBARS,
    data
})
export const setiscar = (goodsId: any) => ({
    type: actionTypes.SET_ISCAR,
    data: goodsId
})
export const setcheck = (data: any) => ({
    type: actionTypes.SET_CHECK,
    data
})
export const setcounts = (data: any) => ({
    type: actionTypes.SET_COUNTS,
    data
})
export const setallcheck = (data: any) => ({
    type: actionTypes.SET_ALL_CHECK,
    data
})