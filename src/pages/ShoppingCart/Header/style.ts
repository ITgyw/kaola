import styled from "styled-components";
import style, { px2rem } from "@/assets/global-style";

const HeaderWrapper = styled.div`
    height:${px2rem(45)};
    display:flex;
    font-size:${px2rem(18)};
    /* justify-content: center; */
    align-items: center;
    span{
        padding-left:45%;
    }
    .btns{
        margin-left:${px2rem(100)};
        color:${style["theme-color"]};
        i{  
            font-size:${px2rem(22)}
    }  
    }
`
export default HeaderWrapper