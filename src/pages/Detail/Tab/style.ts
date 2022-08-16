import styled from "styled-components";
import style, { px2rem } from "@/assets/global-style";

const TabWrapper = styled.div`
    width: 100%;
    height: ${px2rem(44)};
    display: flex;
    padding: ${px2rem(7.808)} ${px2rem(10.41)} ;
    position: fixed;
    bottom: ${px2rem(0)};
     /* a {
        
       
        justify-content: space-around;
        i{
            font-size: 1.5em;
        }
       
     } */
     .font {
        display: flex;
        /* margin-right: ${px2rem(15)}; */
        
        .dianpu {
            /* margin-right: ${px2rem(10)}; */
            /* display: flex;
            align-items: center; */
            display: flex;
            flex-direction: column;
            width: ${px2rem(40)};
            align-items:center;
        }
     }
     .shopping {
        display: flex;
        margin: 0 ${px2rem(10)};

        .shoppingcar {
            border: 1px solid ;
            border-color: ${style['theme-color']};
            width:${px2rem(130)};
            height: 100%;
            color: ${style["theme-color"]};
            text-align:center;
            line-height: ${px2rem(44)}; 
            display: flex;
            justify-content:center; 
            align-items: center; 
            border-radius: ${px2rem(15)};
            
        }
        .buyer {
            background-color: ${style["theme-color"]};
            flex:1;
            width:${px2rem(130)};
            color: ${style["content-background-color"]};
            border-radius: ${px2rem(15)};
            margin-left: ${px2rem(10)};
            display: flex;
            justify-content:center; 
            align-items: center; 
        }
     }
`
export default TabWrapper