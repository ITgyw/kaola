/**
 * 首页物品
 */
interface GoodsType {
    countryLogo: string;
    goodsImage: string;
    goodsName: string;
    titleForeHeadLabelList: string;
    labelListWithStyle?: any;
    enjoyPriceInfo?: any;
    goodsId: number;
}

interface LabelListWithStyleType {
    content?: string;
    content1?: string;
}

interface EnjoyPriceInfoType {
    enjoyPricePrefix?: string;
    enjoyPrice?: string;
}
export type {
    GoodsType,
    LabelListWithStyleType,
    EnjoyPriceInfoType
}