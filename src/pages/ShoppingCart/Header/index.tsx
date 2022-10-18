import React from 'react'
import {Link} from 'react-router-dom'
import HeaderWrapper from './style'

const Header = () => {
  return (
    <HeaderWrapper>
        <span className='tit'>购物车</span>
        <Link to='./home' className='btns'>
            <i className='iconfont icon-shouye'></i>
        </Link> 
    </HeaderWrapper>
  )
}

export default Header
