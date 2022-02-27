import styled from "styled-components";

export const StyledForm = styled.form`

  width: 600px;
  border-radius: 10px;
  margin: 35px auto 35px;
  display: flex;

  input {
    border: none;
    border-radius: 15px 0 0 15px;
    width: 90%;
    padding: 20px 25px;
    font-size: 18px;
    font-weight: 500;

    &:focus {
      outline: unset;
    }
  }

  button {
    border: none;
    background-color: #000;
    border-radius: 0 15px 15px 0;
    width: 10%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 75%;

    button {
      width: 15%;
    }
  }

  @media (max-width: 425px) {
    width: 90%;
    
    button {
      width: 20%;
    }
  }
`;