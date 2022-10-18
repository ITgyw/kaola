import styled from "styled-components";
import style, { px2rem } from "@/assets/global-style";

// export const CarWrapper = styled.div`

//     /* .header {
//         height:${px2rem(44)};
//         display: flex;
//         h2 {
//             margin-left: ${px2rem(163.5)}
//         }
//         .icon {
        
            
//             margin-left: ${px2rem(60)};
//             span {
//                 margin-right: ${px2rem(20)};
//                 text-align: center;
//             }
//             i {
//                 font-size: 1.8em;
//             }
//         }
//     }
//     .footer {
//         .icon-xuanzhong {
//             border-radius: 50%;
//             background-color: ${style["theme-color"]};
//             color: #fff;
//         }
//     } */
//     .shoppingCartWrap {
//     min-height: 100vh;
//     background-color: #f8f8f8;
//     font-family: Arial, 黑体;
//     .shoppingCartWrap_content_list_imgWarp{
//         width: 3rem;
//         height: 4rem;
//     }
// }

// .shoppingCartWrap_header {
//     width: 100%;
//     height: 50px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     box-shadow: 0px 1px 10px 2px #eeeeee;
// }



// .shoppingCartWrap_content_list {
//     margin-top: 10px;
//     padding: 10px;
//     box-shadow: 1px 1px 5px 2px #eeeeee;
//     box-sizing: border-box;
//     border-radius: 5px;
//     display: flex;
// }

// .shoppingCartWrap_content_check {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-right: 10px;
// }

// .shoppingCartWrap_content_check img {
//     width: 15px;
//     height: 15px;
// }

// .shoppingCartWrap_content_list_imgWrap {
//     width: 80px;
//     height: 80px;
//     min-height: 80px;
//     min-width: 80px;
//     border: 1px #eee solid;
//     border-radius: 5px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden;
// }

// .shoppingCartWrap_content_list_imgWrap img {
//     width: 100%;
// }

// .shoppingCartWrap_content_list_info {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     margin-left: 15px;
// }

// .shoppingCartWrap_content_list_title {
//     font-size: 16px;
//     color: #333;
// }

// .shoppingCartWrap_content_list_subtitle {
//     font-size: 14px;
//     color: #666;
// }

// .shoppingCartWrap_content_list_action {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }

// .shoppingCartWrap_content_list_price {
//     font-size: 16px;
//     color: orangered;
// }

// .shoppingCartWrap_content_list_actionNum {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .shoppingCartWrap_content_list_actionNumChangeButton {
//     width: 20px;
//     height: 20px;
//     background-color: #eee;
//     line-height: 20px;
//     text-align: center;
// }

// .shoppingCartWrap_content_list_actionNumInfo {
//     width: 25px;
//     overflow: hidden;
//     text-align: center;
// }

// .shoppingCartWrap_footer {
//     position: fixed;
//     left: 0;
//     bottom: 0;
//     width: 100%;
//     height: 50px;
//     box-shadow: 0px 1px 5px 5px #eee;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 0 0px 0 10px;
//     box-sizing: border-box;
// }

// .shoppingCartWrap_footer_action {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .shoppingCartWrap_footer_checkAll {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-right: 10px;
// }

// .shoppingCartWrap_footer_checkAll img {
//     width: 15px;
//     height: 15px;
//     margin-right: 5px;
// }

// .shoppingCartWrap_footer_mount {
//     color: orangered;
// }

// .shoppingCartWrap_footer_submit {
//     width: 100px;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: orangered;
//     color: #fff;
//     font-size: 18px;
// }
// `
export const CarWrapper = styled.div`
    .item{
        display:flex;
    padding: ${px2rem(15)} 0;
    .left{
        display:flex;
        align-items: center;
        img{
            margin:0 ${px2rem(10)};
            height:${px2rem(20)};
            width:${px2rem(20)};
        }
    }
    .right{
        display:flex;
        .image{
            img{
                width:${px2rem(93)};
                height:${px2rem(93)};
            }
        }
        .detail{
            .title{
                text-align: left;
                font-family: sans-serif;
                color: #33373D;
                font-size:0.7rem;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1
            }
            .info{
                /* position:relative; */
                display:flex;
                width:100%;
                height:${px2rem(74)};
                .info-left{
                    position:relative;
                    /* top:${px2rem(50)}; */
                    /* text-align:center; */
                    padding:${px2rem(34)} 0;
                    width:50%;
                }
                .info-right{
                    position:relative
                    width:40%;
                    .ops{
                        font-weight:700;
                        display:flex;
                        justify-content:center; 
                        border:0.5px solid black;
                        /* align-items: center; */
                        .change{
                            font-size:${px2rem(20)};
                            width:${px2rem(25)};
                            height:${px2rem(25)};
                            text-align:center;
                            line-height:${px2rem(25)};
                        }
                        .count{
                            text-align:center;
                            line-height:${px2rem(25)};
                            border-left:0.5px dashed #808080;
                            border-right:0.5px dashed #808080;
                            width:${px2rem(42)};
                            height:${px2rem(25)};
                        }
                    }
                    .iconfont{
                        text-align:right;
                        padding:${px2rem(15)} 0;
                    }
                }
                
            }
        }
    }
    }
`
export const FooterWrapper = styled.div`
    width: 100%;
    position:fixed;
    left:0;
    bottom:${px2rem(56)};
    display:flex;
    align-items: center;
    font-size:${px2rem(12)};
    height: ${px2rem(51)};
    .left{
        display:flex;
        align-items: center;
        img{
            margin:0 ${px2rem(10)};
            height:${px2rem(20)};
            width:${px2rem(20)};
        }
    }
    .center{
        text-align: center;
        font-size:${px2rem(13)};
        flex:1;
        /* width:50%; */
    }
    .right{
        text-align: center;
        font-size:${px2rem(15)};
        width:${px2rem(100)}
    }
`
