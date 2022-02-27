import styled from "styled-components";
import Background from '../images/pattern-bg.png';

export const StyledHeader = styled.header`
  width: 100%;
  height: 315px;
  color: #fff;
  background: url(${Background}) no-repeat;
  background-size: cover;
  text-align: center;

  h1 {
    padding-top: 40px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }
  }
`;