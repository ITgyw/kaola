import styled from "styled-components";
import { px2rem } from "@/assets/global-style";

const TabWrapper = styled.div`
    width: 100%;
    height: ${px2rem(37.5)};
    display: flex;
    padding: ${px2rem(7.808)} ${px2rem(10.41)} ;
    position: fixed;
    bottom: ${px2rem(0)};
     a {
        
        i{
            font-size: 1.5em;
        }
     }
`
export default TabWrapper