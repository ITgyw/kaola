import React, { useEffect, useState } from 'react'
import { SideBar } from 'antd-mobile'
import classNames from 'classnames'
import SortWrapper from './style'
import { rootState } from '@/store'
import { getSiderbarsDataAction } from "@/store/actionCreators"
import { connect } from "react-redux"
import Item from 'antd-mobile/es/components/dropdown/item'

interface SiderbarProps {
    loading: boolean;
    siderbars: any;
    getSiderbarDataActionDispatch: () => void
}
const Sort: React.FC<SiderbarProps> = (props) => {
    const {
        loading,
        siderbars
    } = props
    const {
        getSiderbarDataActionDispatch
    } = props
    const [activeKey, setActiveKey] = useState('1')
    useEffect(() => {
        getSiderbarDataActionDispatch()
    }, [])
    // const tabs = [
    //     {
    //         key: 'key1',
    //         title: '选项一',


    //     },
    //     {
    //         key: 'key2',
    //         title: '选项二',

    //     },
    //     {
    //         key: 'key3',
    //         title: '选项三',


    //     },
    // ]
    return (
        <SortWrapper>
            <div className='sort-wrapper'>
                {
                    <div className="container">
                        <div className="side">
                            <SideBar activeKey={activeKey} onChange={setActiveKey}>
                                {
                                    siderbars.map((item: any) => (
                                        <SideBar.Item
                                            className={classNames(

                                                activeKey === item.key && 'siderbar-active'
                                            )}
                                            key={item.key} title={item.title} />
                                    ))
                                }
                            </SideBar>
                        </div>
                        <div className="main">
                            {
                                siderbars.map((item: any) => (
                                    <div
                                        key={item.key}
                                        className={classNames(
                                            'content',
                                            activeKey === item.key && 'active'
                                        )}
                                    >
                                        {item.data.map((item2: any, index: number) => (
                                            <div className='item2' key={index}>
                                                <div className="item2-title">
                                                    {item2.title}
                                                </div>
                                                <div className="item2-data">
                                                    {
                                                        item2.data.map((item3: any, index: number) => (
                                                            <div className="item3" key={index}>
                                                                <div className="item3-title">
                                                                    {item3.title}
                                                                </div>
                                                                <div className="item3-img">
                                                                    <img src={item3.img} alt="" />
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                                )
                            }
                        </div>

                    </div>
                }
            </div>

            {/* <div className='container'>
                <div className='side'>
                    <SideBar activeKey={activeKey} onChange={setActiveKey}>
                        {tabs.map(item => (
                            <SideBar.Item key={item.key} title={item.title} />
                        ))}
                    </SideBar>
                </div>
                <div className='main'>
                    <div
                        className={classNames(
                            'content',
                            activeKey === 'key1' && 'active'
                        )}
                    >
                        页面 1
                    </div>
                    <div
                        className={classNames(
                            'content',
                            activeKey === 'key2' && 'active'
                        )}
                    >
                        页面 2
                    </div>
                    <div
                        className={classNames(
                            'content',
                            activeKey === 'key3' && 'active'
                        )}
                    >
                        页面 3
                    </div>
                </div>
            </div> */}
        </SortWrapper>
    )
}

const mapStateToProps = (state: rootState) => ({
    loading: state.loading,
    siderbars: state.siderbar.siderbars
})
const mapDispatchToProps = (dispatch: any) => ({
    getSiderbarDataActionDispatch() {
        dispatch(getSiderbarsDataAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
