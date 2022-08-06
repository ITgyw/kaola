import { Dispatch } from "react";
import * as actionTypes from '../constants'
import {
    getGoodsRequest
} from '@/api/request'

export const getHomeDataAction = () => {
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