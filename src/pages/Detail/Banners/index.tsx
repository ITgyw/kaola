import React from 'react'
import { Swiper } from 'antd-mobile'
import BannersWrapper from './style'
const Banners: React.FC<any> = (props) => {
    const { details } = props
    return (
        // <div>{details.}</div>
        <BannersWrapper>
            {details.map((item: any) => (
                item.map((item2: any, index: number) => (
                    <div className="swiper" key={index}>
                        <Swiper loop
                            indicator={(total, current) => (
                                <div className="customIndicator">
                                    {`${current + 1} / ${total}`}
                                </div>
                            )}>
                            {item2.imgs.map((item3: any, index: number) => (
                                <Swiper.Item key={index} className="swiper-item">
                                    <img src={item3} alt="" />
                                </Swiper.Item>
                            ))}
                        </Swiper>
                    </div>

                ))
            ))}
        </BannersWrapper>
    )
}

export default Banners
