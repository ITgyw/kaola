import { axiosInstance } from "./config";
import {
    URL_GOODS,
    URL_NAVBARS,
    URL_DETAIL,
    URL_SIDERBAR,
} from './url'

export const getGoodsRequest =
    () => axiosInstance.get(URL_GOODS)
export const getNavbarsRequest =
    () => axiosInstance.get(URL_NAVBARS)
export const getDetailRequest =
    (id: number) => axiosInstance.get(URL_DETAIL + "/" + id)
export const getSiderbarsRequest =
    () => axiosInstance.get(URL_SIDERBAR)