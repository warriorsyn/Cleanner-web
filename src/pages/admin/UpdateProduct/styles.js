import styled from "styled-components";
import { Container as BootstrapContainer } from "reactstrap";

import { Form as UnForm, Input as UnInputs } from "unform";

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  height: 65%;
  justify-content: center;
`;

export const UnInput = styled(UnInputs)``;

export const Form = styled(UnForm)`
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
`;
