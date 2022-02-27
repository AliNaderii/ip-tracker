import styled from "styled-components";

export const StyledMap = styled.section`
  width: 100%;
  height: 70%;

  .leaflet-container {
    height: 100%;
    z-index: -1;
  }

  .leaflet-control-container {
    display: none;
  }

  .icon {
    background-color: unset;
    width: 46px;
    height: 56px;
  }

  @media (max-width: 768px) {
    .icon {
      width: 26px;
      height: 36px;
    }
  }
`;