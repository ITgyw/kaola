import React from 'react'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import { isPathPartlyExisted } from '../../utils'
import { FooterWrapper } from './style'

const Footer = () => {
    const { pathname } = useLocation()
    if (isPathPartlyExisted(pathname)) return <div></div>
    return (
        <FooterWrapper>
            <NavLink to="/home">
                <i className='iconfont icon-shouye'></i>
                <span>首页</span>
            </NavLink>
            <NavLink to="/kaolabean">
                <i className='iconfont icon-liwu'></i>
                <span>考拉豆</span>
            </NavLink>
            <NavLink to="/sort">
                <i className='iconfont icon-fenlei2'></i>
                <span>分类</span>
            </NavLink>
            <NavLink to="/shoppingcart">
                <i className='iconfont icon-gouwuche'></i>
                <span>购物车</span>
            </NavLink>
            <NavLink to="/mine">
                <i className='iconfont icon-wode'></i>
                <span>我的考拉</span>
            </NavLink>
        </FooterWrapper>
    )
}

export default Footer