import React, { useEffect, useState } from 'react'
import CarWrapper from './style'
import classnames from 'classnames'
import { rootState } from '@/store'
import { connect } from 'react-redux'
import { setiscar, setcheck, setcounts, setallcheck } from '@/store/actionCreators'

interface CarProps {
    goods: any[];
    checkGoodsDispatch: () => void;
    changeGoodsNumDispatch: () => void;
    checkAllGoodsDispatch: () => void;
    checkGoodsIscarDispatch: () => void;
}
const ShoppingCart: React.FC<CarProps> = (props) => {
    const [show, setShow] = useState(true)
    const { goods } = props
    const { checkGoodsDispatch,
        changeGoodsNumDispatch,
        checkAllGoodsDispatch,
        checkGoodsIscarDispatch
    } = props
    let count;
    let nums;
    console.log(goods);

    return (

        <CarWrapper>
            <div className='header'>
                <h2>购物车</h2>
                <div className='icon'>
                    <span>编辑</span>
                    <i className='iconfont icon-xiaoxi'></i>
                </div>
            </div>
            <div className="container">

            </div>
            <div className='footer'>
                <div className='font'>
                    <i
                        className={classnames('iconfont', { 'icon-weixuanzhongyuanquan': show }, { 'icon-xuanzhong': !show })}
                        onClick={
                            // setShow((show) => (!show))
                            () => { setShow((show) => (!show)) }
                        }
                    // onClick={setShow(!show)}
                    ></i>
                    <div className='total'>{`合计：￥ + ${nums}`}</div>
                    <div className='end'>{`结算：(${count})`}</div>
                </div>
            </div>
        </CarWrapper>
    )
}
const mapStateToProps = (state: rootState) => ({
    goods: state.good.goods,
})
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