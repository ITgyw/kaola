import styled from "styled-components"
import style, { px2rem } from '@/assets/global-style'

const SortWrapper = styled.div`
.sort-wrapper {
  .container {
        height: 100vh;
        background-color: #ffffff;
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        [data-prefers-color='dark'] & {
          background-color: unset;
        }
        .side {
          flex: none;
          .siderbar-active {
            background-color: ${style["theme-color"]};
            color:#fff;
          }
        }
        .main {
          flex: auto;
          position: relative;
          .content {
              height: 100%;
              display: none;
              justify-content: center;
              align-items: center;
              font-size: 32px;
              color: #cccccc;
              display: flex;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 1;
              &.active {
                z-index:100;
              }
            }
        }
        


  }
}
`
export default SortWrapper