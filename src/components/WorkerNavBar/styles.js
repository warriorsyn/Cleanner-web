import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar } from "reactstrap";

export const Button = styled.button`
  padding: 10px 0;
  margin-bottom: 125px;
  text-decoration: none !important;
  color: black;
  font-size: 20px;
  line-height: 50px;

  @media (min-width: 768px) {
    padding: 2px;
    margin-right: 10px;
    text-decoration: none !important;
    color: black;
    font-size: 18px;
  }
`;

export const LinkBar = styled(Link)`
  padding: 10px 0;
  margin-bottom: 125px;
  text-decoration: none !important;
  color: black;
  font-size: 20px;
  line-height: 50px;

  @media (min-width: 768px) {
    padding: 2px;
    margin-right: 10px;
    text-decoration: none !important;
    color: white;
    font-size: 18px;
  }
`;

export const Navbar = styled(BootstrapNavbar)`
  padding-bottom: 26px !important;
  @media (min-width: 768px) {
    padding-bottom: 10px !important;
  }
`;
