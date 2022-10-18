import { rootState } from '@/store'
import { getDetailDataAction,getShoppingCarDataAction } from '@/store/actionCreators'
import { connect } from 'react-redux'
import React, { useEffect,useState } from 'react'
import Banners from './Banners'
import { useLocation,NavLink } from 'react-router-dom'
import Header from './Header'
import { Button, Modal, Space, Toast, Divider } from 'antd-mobile'
import {TabWrapper} from './style'
// import { log } from 'console'


const Detail: React.FC<any> = (props) => {
    const { pathname } = useLocation()
    let pathRes = pathname.split('/')[2]
    const [visible, setVisible] = useState(false)
    const {
        loading,
        details
    } = props
    const {
        getDetailDataActionDispatch,
        checkGoodsIscarDispatch
    } = props
    useEffect(() => {
        getDetailDataActionDispatch(pathRes)
        // console.log(details);
    }, [])

    // console.log(pathRes)
    // console.log(details);

    return (
        <div>
            <Header />
            <Banners details={details} />
            <TabWrapper>
                <div className='font'>
                    <NavLink to="/ele">
                        <div className="dianpu">
                            <i className='iconfont icon-dianpu'></i>
                            <span>店铺</span>
                        </div>
                    </NavLink>
                    <NavLink to="/ele">
                        <div className="dianpu">
                            <i className='iconfont icon-xiaoxi'></i>
                            <span>客服</span>
                        </div>

                    </NavLink>
                </div>

                <div className='shopping'>
                    <div>
                        <Button
                            className='shoppingcar'
                            block
                            onClick={() => {
                                setVisible(true);
                                // 发送dispatch
                                checkGoodsIscarDispatch(pathRes);
                            }}
                        >
                            加入购物车
                        </Button>
                        <Modal
                            visible={visible}
                            content='加入购物车成功！'
                            closeOnAction
                            afterShow={() => {
                                setTimeout(() => {
                                    setVisible(false)
                                }, 1000)
                            }}

                        />
                    </div>
                    <div className="buyer">
                        <div className='buy'>
                            <span>立即购买</span>
                        </div>
                    </div>
                </div>
            </TabWrapper>
        </div>
    )


}


const mapStateToProps = (state: rootState) => ({
    loading: state.loading,
    details: state.detail.details,
    goods:state.good.goods,
})
const mapDispatchToProps = (dispatch: any) => ({
    getDetailDataActionDispatch(id: number) {
        dispatch(getDetailDataAction(id))
    },
    checkGoodsIscarDispatch(data:any) {
        dispatch(getShoppingCarDataAction(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail)