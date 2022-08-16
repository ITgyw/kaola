import styled from "styled-components";
import style, { px2rem } from "@/assets/global-style";

const CarWrapper = styled.div`
    .header {
        height:${px2rem(44)};
        display: flex;
        h2 {
            margin-left: ${px2rem(163.5)}
        }
        .icon {
            /* display:flex; */
            
            margin-left: ${px2rem(60)};
            span {
                margin-right: ${px2rem(20)};
                text-align: center;
            }
            i {
                font-size: 1.8em;
            }
        }
    }
    .footer {
        .icon-xuanzhong {
            border-radius: 50%;
            background-color: ${style["theme-color"]};
            color: #fff;
        }
    }
`

export default CarWrapper