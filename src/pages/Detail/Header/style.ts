import styled from "styled-components";
import style, { px2rem } from "@/assets/global-style";

const HeaderWrapper = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content:space-between;
    width: 100%;
    height: ${px2rem(44)};
    padding: ${px2rem(10)} ${px2rem(12)};
    i {
            background-color: ${style["background-color"]};
            font-size: ${px2rem(25)};
            padding: ${px2rem(1)};
            border-radius: 50%;
        }
    .font {
        
        i {
           
            margin-left:${px2rem(12)};
            
        }
    }
`
export default HeaderWrapper