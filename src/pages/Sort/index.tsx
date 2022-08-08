import React, { useState } from 'react'
import { SideBar } from 'antd-mobile'
import classNames from 'classnames'
import SortWrapper from './style'

const Sort = () => {
    const [activeKey, setActiveKey] = useState('key1')
    const tabs = [
        {
            key: 'key1',
            title: '选项一',

        },
        {
            key: 'key2',
            title: '选项二',

        },
        {
            key: 'key3',
            title: '选项三',


        },
    ]
    return (
        <SortWrapper>
            <div className='container'>
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
            </div>
        </SortWrapper>
    )
}

export default Sort
