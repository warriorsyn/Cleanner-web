import styled from "styled-components";
import {
  Form as BootstrapForm,
  Container as BootstrapContainer
} from "reactstrap";

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  height: calc(100% - 2rem);
  justify-content: center;

  @media (min-width: 768px) {
    height: 75%;
  }
`;

export const Form = styled(BootstrapForm)`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 40px;
  flex: 1;
  align-items: stretch;
  margin-top: 20px;

  h2 {
    color: #7b7878;
  }

  #nothing {
    display: flex;
    justify-content: center;
    margin-left: 3rem;
    margin-top: 0.5rem;
  }

  #nothing span {
    color: grey;
    font-size: 18px;
  }
`;
