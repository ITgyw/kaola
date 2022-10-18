import React, { useEffect, useState } from 'react'
import { CarWrapper } from './style'
// import classnames from 'classnames'
import { rootState } from '@/store'
import { connect } from 'react-redux'
import { setiscar, setcheck, setcounts, setallcheck } from '@/store/actionCreators'
// import { any } from 'prop-types'
import checkedImg from '@/assets/images/shopping_check.png'
import checkNormalImg from '@/assets/images/shopping_checkNormal.png'
// import './assets/css/shoppingCart.css'
interface CarProps {
    goods: any[];
    goodspart: any[];
    checkAll: any;
    price: any;
    checkGoodsDispatch: (goodsId: any) => void;
    changeGoodsNumDispatch: (data: any) => void;
    checkAllGoodsDispatch: (data: any) => void;
    checkGoodsIscarDispatch: (data: any) => void;
}
const ShoppingCart: React.FC<CarProps> = (props) => {
    const [show, setShow] = useState(true)
    const { goods, goodspart, checkAll, price } = props
    const {
        checkGoodsDispatch,
        changeGoodsNumDispatch,
        checkAllGoodsDispatch,
        checkGoodsIscarDispatch
    } = props
    const checkAllGoods = () => {
        checkAllGoodsDispatch(checkAll)
    }
    const checkGoods = (goodsId: any) => {
        checkGoodsDispatch(goodsId)
    }
    const changeGoodNum = (e: any, status: any, goodsId: any) => {
        e.preventDefault();
        e.stopPropagation();
        let data = {
            status: status,
            goodsId: goodsId
        }
        changeGoodsNumDispatch(data)
    }

    let count;
    let nums;
    console.log(goods);
    console.log(goodspart)
    return (

        <CarWrapper>
            <div className="shoppingCartWrap">
                <div className="shoppingCartWrap_header">
                    <div>购物车</div>
                </div>
                <div className="shoppingCartWrap_content">
                    {
                        goodspart.map((item, index) => (
                            <div
                                className="shoppingCartWrap_content_list"
                                key={index}
                                onClick={() => checkGoods(item.goodsId)}
                            >
                                <div className="shoppingCartWrap_content_check">
                                    {
                                        item.check ? <img src={checkedImg} /> : <img src={checkNormalImg} />
                                    }
                                </div>
                                <div className="shoppingCartWrap_content_list_imgWarp">
                                    <img src={item.goodsImage} alt="" />
                                </div>
                                <div className="shoppingCartWrap_content_list_info">
                                    <div className="shoppingCartWrap_content_list_title">
                                        {item.goodsname}
                                    </div>
                                    <div className="shoppingCartWrap_content_list_subtitle">
                                        {item.goodsname}
                                    </div>
                                    <div className="shoppingCartWrap_content_list_action">
                                        {/* html + 数据绑定 = 静态的JSX  */}
                                        {
                                            item.counts > 0 && <div style={{
                                                display: 'flex',
                                                justifyContent: 'center', alignItems: 'center'
                                            }}>
                                                <div
                                                    onClick={(e) => changeGoodNum(e, 'reduce', item.goodsId)}
                                                    className="shoppingCartWarp_content_list_actionNumChangeButton">
                                                    -
                                                </div>
                                                <div className="shoppingCartWrap_content_list_actionNumInfo">
                                                    {item.counts}
                                                </div>
                                                </div>
                                        }
                                        <div className="shoppingCartWarp_content_list_actionNumChangeButton"
                                            onClick={(e) => changeGoodNum(e, 'add', item.goodsId)}
                                        >+</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="shoppingCartWrap_footer">
                    <div className="shoppingCartWrap_footer_action">
                        <div className="shoppingCartWrap_footer_checkAll"
                            onClick={() => checkAllGoods()}
                        >
                            {
                                checkAll ? <img src={checkedImg} /> : <img src={checkNormalImg} />
                            }
                            全选
                        </div>
                        <div className="shoppingCartWrap_footer_mount">
                            总计&nbsp;&nbsp;<span>{price.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </CarWrapper>
    )
}
const mapStateToProps = (state: rootState) => {
    let price = state.good.goodspart.reduce((total: any, item: any) => total + (item.check ?
        parseFloat(item.enjoyPriceInfo.enjoyPrice * item.counts + '') : 0), 0)
    return {
        goods: state.good.goods,
        goodspart: state.good.goodspart,
        checkAll: state.good.goodspart.filter(
            (item: any) => item.check).length == state.good.goodspart.length,
        price: price
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        checkGoodsDispatch(goodsId: any) {
            dispatch(setcheck(goodsId))
        },
        changeGoodsNumDispatch(data: any) {
            dispatch(setcounts(data))
        },
        checkAllGoodsDispatch(data: any) {
            dispatch(setallcheck(data))
        },
        checkGoodsIscarDispatch(data: any) {
            dispatch(setiscar(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);