import { axiosInstance } from "./config";
import {
    URL_GOODS,
    URL_NAVBARS
} from './url'

export const getGoodsRequest =
    () => axiosInstance.get(URL_GOODS)
export const getNavbarsRequest =
    () => axiosInstance.get(URL_NAVBARS)