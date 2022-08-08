import styled from "styled-components";
import { px2rem } from "@/assets/global-style";
export const FooterWrapper = styled.div`
    width: 100%;
    height: ${px2rem(53)};
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    z-index:1;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        &.active {
            color: #C20C0C;
        }
        i{
            font-size: 1.5em;
        }
    }
`