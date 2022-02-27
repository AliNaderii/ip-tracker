import styled from "styled-components";

export const StyledResult = styled.div`
  width: 960px;
  display: flex;
  margin: 35px auto;
  padding: 35px 0;
  border-radius: 15px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors['Very Dark Gray']};
  text-align: left;

  @media (max-width: 960px) {
    width: 768px;
    padding: 25px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
    /* flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 15px;
    justify-items: center;
    align-items: baseline;
    text-align: center;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    align-items: center;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  padding-right: 40px;
  padding-left: 35px;
  height: 100%;

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors['Dark Gray']};
  }

  p {
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    span {
      font-size: 12px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const Line = styled.div`
  min-width: 2px;
  height: 75px;
  background-color: ${({ theme }) => theme.colors['Dark Gray']};
  opacity: 0.2;

  @media (max-width: 768px) {
    display: none;
  }
`;