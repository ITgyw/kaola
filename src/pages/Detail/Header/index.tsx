import React from 'react'
import { Link } from 'react-router-dom'
import HeaderWrapper from './style'

const Header = () => {
    return (
        <HeaderWrapper>
            <Link className="back" to="/home">
                <i className='iconfont icon-fanhui'></i>
            </Link>
            <Link className="font" to="/shoppingcart">
                <i className="iconfont icon-gouwuche"></i>
                <i className="iconfont icon-shoucang"></i>
                <i className="iconfont icon-fenxiang"></i>
            </Link>
        </HeaderWrapper>
    )
}

export default Header
