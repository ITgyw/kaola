import React, { useState } from 'react'
import TabWrapper from './style'
import { NavLink } from 'react-router-dom'
import { Button, Modal, Space, Toast, Divider } from 'antd-mobile'

const Tab = () => {
    const [visible, setVisible] = useState(false)
    return (
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
                            setVisible(true)
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
    )
}
export default Tab
