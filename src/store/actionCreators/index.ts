import { Dispatch } from "react";
import * as actionTypes from '../constants'
import {
    getGoodsRequest,
    getNavbarsRequest
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
export const getDetailDataAction = () => {
    return (dispatch: any) => {
        dispatch(setLoading(true))
        return Promise.all([
            getGoodsRequest()
        ]).then((goodsData) => {
            dispatch(setgoods(goodsData))
            dispatch(setLoading(false))
        })
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