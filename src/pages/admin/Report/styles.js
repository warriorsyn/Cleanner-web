import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container as BootstrapContainer } from "reactstrap";

export const Container = styled(BootstrapContainer)`
  display: flex;
  flex-direction: column;
  height: 74% !important;
  margin-top: 50px;
`;

export const Options = styled(Link)`
  background-color: #d5edda;
  text-decoration: none !important;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => (props.last ? "10px" : "0")};

  span {
    font-size: 20px;
    padding: 5px;
    color: #7b7878;
  }

  div i {
    margin-right: 20px;
    color: #7b7878;
  }

  &:hover {
    span {
      color: black;
    }

    div i {
      color: black;
    }
  }
`;
