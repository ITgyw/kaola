import styled from "styled-components";
import style, { px2rem } from '@/assets/global-style'


const Wrapper = styled.div`
    background-color:${style["background-color"]};
    .header{
        display:flex;
        margin: ${px2rem(12.5)};
        .left{
            display:flex;
            flex:1;       
            img{
                width:${px2rem(41.64)};
                margin-right:${px2rem(2)};            
            }
            .font{
                font-family:"Gill Sans", sans-serif;
                /* color:#fff; */
                font-size:${style["font-size-m"]};
                /* text-align:center; */
                margin:auto 0;
            }
        }
        .right {
            margin:auto 0;
            i{
                font-size: 22px;
            }
            .icon-jindouyindou01 {
                margin-right:12px;
                font-size: 22px;
            }
        }
    }
    .search {
        margin: ${px2rem(4)} ${px2rem(12.5)} ;
        height: ${px2rem(36)};
        display:flex;
        border-radius:${px2rem(2)};
        background-color:#fff;
        border-radius: ${px2rem(22)};
        /* justify-content: space-between; */
        .iconfont {
           
            background-color: #fff;
            font-size:${px2rem(20)};
            margin: auto ${px2rem(10)};
        }
        .Box{
            /* flex-grow:1; */
            padding-right: 0;
            display:flex;
            width: 100%;
            input::-webkit-input-placeholder {
                color:#cdcdcd;
            }
            input {
                flex:1;
                border: none;
            }
            .span {
                border-radius:${px2rem(22)};
                background-color: ${style["theme-color"]};
                margin: auto 0;
                color: #fff;
                font-size: ${px2rem(16)};
                width:${px2rem(60)};
                height:${px2rem(34)};
                text-align:center;
                line-height: ${px2rem(34)};
            }
        }
        
    }
    .middle {
        display: flex;
        
        .select{
            margin-right: ${px2rem(4)};        
        }
        .sort {
            width: 40%;
            display:flex;
            justify-content:space-between;
            margin-right:  ${px2rem(4)};
            i {
                margin:auto 0;
            }
            span {
                margin: auto 0;
                font-size:14px;
            }
        }
    }
    .tab {      
            display:flex;
            flex-wrap: wrap;    
            .item {
                &:nth-child(odd) {
                    margin: 0 ${px2rem(10)} 0 0;   
                }
                width: ${px2rem(170)};
                height:${px2rem(297)};
                margin-bottom: ${px2rem(10)};
                background-color: ${style["content-background-color"]};
                .link {
                    .main-image {
                        img{
                            margin: 0 auto;
                            width:${px2rem(160)};
                            height: ${px2rem(160)};
                        }
                    }
                    .title {
                        display: flex;
                        .left {
                            img{
                                width: ${px2rem(27)};
                                height: ${px2rem(13.5)};
                            }
                        }
                        .main {
                            /* float: left; */
                            img{
                                width: ${px2rem(15.6)};
                                height: ${px2rem(15.6)};
                            }
                        }
                        .right {
                            
                            /* height: ${px2rem(15.6)}; */

                        }
                    }
                }
            }
    }
    
`
export default Wrapper
