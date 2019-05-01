import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background: #202225;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 40px;
  width: 400px;
  align-items: stretch;

  img {
    height: 200px;
  }
  span {
    color: black;
    font-weight: bold;
    letter-spacing: 1.11px;
    /* line-height: 20px; */
  }
  input {
    height: 40px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.3);

    &:focus {
      border-color: #7289da;
    }
  }

  button {
    border: 0;
    background: #7289da;
    color: white;
    font-weight: bold;
    height: 45px;
  }
`;
