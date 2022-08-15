import React from 'react'
import TabWrapper from './style'
import { NavLink } from 'react-router-dom'

const Tab = () => {
    return (
        <TabWrapper>
            <NavLink to="/ele">
                <i className='iconfont icon-dianpu'></i>
                <span>自营店</span>
            </NavLink>
            <NavLink to="/ele">
                <i className='iconfont icon-xiaoxi'></i>
                <span>考拉客服</span>
            </NavLink>
            <NavLink to="/shoppingcar">
                <div className='shoppingcar'>加入购物车</div>
            </NavLink>
            <NavLink to="/ele">
                <div className='buy'>立即购买</div>
            </NavLink>
        </TabWrapper>
    )
}
export default Tab
