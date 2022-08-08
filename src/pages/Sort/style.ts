import styled from "styled-components"

const SortWrapper = styled.div`
    .container {
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  [data-prefers-color='dark'] & {
    background-color: unset;
  }
}

.side {
  flex: none;
}

.main {
  flex: auto;
}

.content {
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #cccccc;
  &.active {
    display: flex;
  }
}
`
export default SortWrapper