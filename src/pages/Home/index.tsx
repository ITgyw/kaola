import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "react";
import { getHomeDataAction } from "@/store/actionCreators";
// import { GoodsType } from "@/models/GoodsType";
import { rootState } from "@/store";
import Wrapper from './style'
import logo from '@/assets/images/logo.png'
import { Tabs, Badge } from 'antd-mobile'
// import Swiper from 'swiper'

interface HomeProps {
    loading: boolean;
    goods: any[];
    navbars: any[];
    getHomeDataActionDispatch: () => void;
}
const Home: React.FC<HomeProps> = (props) => {
    const {
        loading,
        goods,
        navbars
    } = props
    const {
        getHomeDataActionDispatch
    } = props
    useEffect(() => {
        if( goods.length==0)
        {
            getHomeDataActionDispatch()
        }

    }, [])
    const Navbar = navbars.map((item) => (
        <Tabs.Tab title={item.name} key={item.id} >
        </Tabs.Tab>
    ))



    const Goods = goods.map((item: any) => (
        <Tabs.Tab
            title={
                <Badge content={item.title.sort} style={{ '--right': '-35px', '--top': '12px' }}>
                    <div className="name">
                        {item.title.name}
                    </div>
                </Badge>
            }
            key={item.id}
        >
            <div className="tab" >
                {
                    item.data.map((item2: any) => (
                        <div className="item" key={item2.goodsId}>
                            <Link to={`/detail/${item2.goodsId}`} className="link">
                                <div className="main-image">
                                    <img src={item2.goodsImage} alt="" />
                                </div>
                                <div className="title">
                                    {
                                        item2.titleForeHeadLabelList ?
                                            <div className="left">
                                                <img src={item2.titleForeHeadLabelList} alt="" />
                                            </div> : <></>
                                    }

                                    <div className="main">
                                        <img src={item2.countryLogo} alt="" />
                                    </div>
                                    <span className="right">{item2.goodsName}</span>
                                </div>
                                <div className="price">
                                    <div className="enjoy-">
                                        <span className="left"> {item2.enjoyPriceInfo.enjoyPricePrefix + `￥`}</span>
                                        <span className="right">{item2.enjoyPriceInfo.enjoyPrice}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))

                }
            </div>


        </Tabs.Tab>
    ))
    return (
        <Wrapper>

            <div className="header">
                <div className="left">
                    <img src={logo} alt="" />
                    <div className="font">
                        考拉海购
                    </div>
                </div>
                <div className="right">
                    <i className="iconfont icon-jindouyindou01"></i>
                    <i className="iconfont icon-xiaoxi"></i>
                </div>
            </div>
            <div className="search">
                <div className="iconfont icon-iconfontscan"></div>
                <Link className="Box" to={'/search'}>
                    <input type="text" className='box'
                        placeholder='雅诗兰黛'
                    />
                    <div className="span">搜索</div>
                </Link>
            </div>
            <div className="middle">
                <Tabs className="select">
                    {Navbar}
                </Tabs>
                <div className="sort">
                    <i className="iconfont icon-fenlei1"></i>
                    <span>分类</span>
                </div>
            </div>

            <Tabs defaultActiveKey="1" style={{ "--active-title-color": "red", "--active-line-color": "#f6f6f6" }} activeLineMode="full">
                {Goods}
            </Tabs>

        </Wrapper >
    )

}
const mapStateToProps = (state: rootState) => {
    
    return {
        loading: state.loading,
        goods: state.good.goods,
        navbars: state.navbar.navbars
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    getHomeDataActionDispatch() {
        dispatch(getHomeDataAction())
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(Home)