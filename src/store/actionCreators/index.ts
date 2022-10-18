import { Dispatch } from "react";
import * as actionTypes from '../constants'
import {
    getGoodsRequest,
    getNavbarsRequest,
    getDetailRequest,
    getSiderbarsRequest
} from '@/api/request'
// home页
export const getHomeDataAction = () => {
    return (dispatch: any) => {
        dispatch(setLoading(true))
        return Promise.all([
            getGoodsRequest(),
            getNavbarsRequest()
        ]).then(([goodsData, navbarsData]) => {
            dispatch(setgoods(goodsData.data))
            dispatch(setgoodpart([...goodsData.data]))
            dispatch(setnavbars(navbarsData.data))
            dispatch(setLoading(false))
        })
    }
}
// 详情页
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
// 导航页
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
// 添加到购物车
export const getShoppingCarDataAction = (data:any) => {
    return (dispatch: any) => {
        dispatch(setiscar(data))
    }
}

// export const changeShoppingCarCheckAction = (data:any) => {
//     return (dispatch:any) => {
//         dispatch(setcheck(data))
//     }
//  }

// export const changeShoppingCarCountsAction = (data:any) => {
//     return (dispatch:any) => {
//         dispatch(setcounts(data))
//     }
// }



export const setLoading = (data: boolean) => ({
    type: actionTypes.SET_LOADING,
    data
})

export const setgoods = (data: any[]) => ({
    type: actionTypes.SET_GOODS,
    data
})
export const setgoodpart = (data: any[]) => ({
    type: actionTypes.SET_GOODS_PART,
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
// 改变商品选中状态
export const setcheckAction = (data: any) => ({
    type: actionTypes.SET_CHECK,
    data
})
// 删除在购物车的商品
export const setdeleteAction = (data:any) => ({
    type:actionTypes.DELETE_ITEM,
    data
})
// 改变购物车的商品数量
export const setcountsAction = (data: any) => ({
    type: actionTypes.SET_COUNTS,
    data
})
// 全选
export const setallcheckAction = (data: any) => ({
    type: actionTypes.SET_ALL_CHECK,
    data
})