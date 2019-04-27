import styled from "styled-components";
import { Link } from "react-router-dom";
export const LinkBar = styled(Link)`
  padding: 10px 0;
  margin-bottom: 125px;
  text-decoration: none !important;
  color: black;
  font-size: 18px;

  @media (min-width: 768px) {
    padding: 2px;
    margin-right: 10px;
    text-decoration: none !important;
    color: black;
    font-size: 18px;
  }
`;
