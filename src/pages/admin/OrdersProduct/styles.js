import styled from "styled-components";
import { Container as BootstrapContainer } from "reactstrap";
import { Link } from "react-router-dom";

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

export const Button = styled(Link)`
  font-weight: bold;
`;
