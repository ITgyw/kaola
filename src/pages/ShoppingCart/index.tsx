import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { CarWrapper, FooterWrapper } from './style'
import { setcheckAction, setcountsAction, setdeleteAction, setallcheckAction } from '@/store/actionCreators/index'
import checkNormalImg from '@/assets/images/shopping_checkNormal.png'
import checkedImg from '@/assets/images/shopping_check.png'
import { rootState } from '@/store'

const ShoppingCart: React.FC<any> = (props) => {
    const {
        // goods,
        goodspart,
        checkAll,
        totalPrice
    } = props
    const {
        changeShoppingCarCheckDispatch,
        changeShoppingCarcountDisoatch,
        deleteShoppingCarItemDispatch,
        changeShoppingCarCheckallDispatch
    } = props
    const changeGoodNum = (status: string, goodsId: number) => {
        let data = {
            status: status,
            goodsId: goodsId
        }
        changeShoppingCarcountDisoatch(data)
    }
    const CarInfo = () => {
        return goodspart.filter((item: any) => item.isCar == true)
            .map((item2: any) => {
                return (
                    <div className="item" key={item2.goodsId}>
                        <div className="left"
                            onClick={() => {
                                changeShoppingCarCheckDispatch(item2.goodsId)
                            }}
                        >
                            {
                                item2.check ? <img src={checkedImg} /> : <img src={checkNormalImg} />
                            }
                        </div>
                        <div className="right">
                            <div className="image">
                                <img src={item2.goodsImage} alt="" />
                            </div>
                            <div className="detail">
                                <div className="title">{item2.goodsName}</div>
                                <div className='info'>
                                    <div className="info-left">价格：{item2.enjoyPriceInfo.enjoyPrice}</div>
                                    <div className='info-right'>
                                        <div className="ops">
                                            {
                                                item2.goodsNum != 0 ?
                                                    <div className="change"
                                                        onClick={() => {
                                                            changeGoodNum('reduce', item2.goodsId)
                                                        }}
                                                    >-</div> : <div></div>
                                            }
                                            <div className="count">{item2.counts}</div>
                                            <div className="change"
                                                onClick={() => {
                                                    changeGoodNum('add', item2.goodsId)
                                                }}
                                            >+</div>
                                        </div>
                                        <div className="iconfont icon-ashbin"
                                            onClick={() => {
                                                deleteShoppingCarItemDispatch(item2.goodsId)
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
    }
    return (
        <div>
            <Header />
            <CarWrapper>
                {CarInfo()}
            </CarWrapper>
            <FooterWrapper>
                <div className="left"
                    onClick={() => {
                        changeShoppingCarCheckallDispatch(checkAll)
                        // console.log(checkAll,'/////*');

                    }}
                >
                    {
                        checkAll ? <img src={checkedImg} /> : <img src={checkNormalImg} />
                    }
                    <span>全选</span>
                </div>
                <div className="center">{`总价: ${totalPrice.toFixed(2)}`}</div>
                <div className="right">结算</div>
            </FooterWrapper>
        </div>
    )
}
const mapStateToProps = (state: rootState) => {
    let totalPrice = state.good.goodspart
        .filter((item:any) => item.isCar)
        .reduce(
            (total:number,item:any) => total + (item.check ? 
                parseFloat("" + (item.enjoyPriceInfo.enjoyPrice*item.counts)) : 0),0
            )
    return {
        goodspart: state.good.goodspart,
        // goodspart:state.good.goodspart,
        checkAll: state.good.goodspart
            .filter((item: any) =>
                item.isCar && item.check
            )
            .length
            == state.good.goodspart
                .filter((item: any) =>
                    item.isCar == true
                ).length,
        totalPrice: totalPrice
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeShoppingCarCheckDispatch(data: any) {
            dispatch(setcheckAction(data))
        },
        changeShoppingCarcountDisoatch(data: any) {
            dispatch(setcountsAction(data))
        },
        deleteShoppingCarItemDispatch(data: any) {
            dispatch(setdeleteAction(data))
        },
        changeShoppingCarCheckallDispatch(data: any) {
            dispatch(setallcheckAction(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
