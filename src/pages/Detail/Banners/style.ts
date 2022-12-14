import styled from "styled-components";
import style, { px2rem } from "@/assets/global-style";

const BannersWrapper = styled.div`
margin-top: ${px2rem(45)};
img {
    
    width:${px2rem(375)};
    height:${px2rem(375)};
}
.customIndicator {
  position: absolute;
  bottom:${px2rem(5)};
  right:${px2rem(165)};
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 8px;
  color: #ffffff;
  border-radius: 4px;
  user-select: none;
}
`
export default BannersWrapper