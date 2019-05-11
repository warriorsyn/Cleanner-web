import styled from "styled-components";

export const Footer = styled.footer`
  background-color: deepskyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  i {
    font-size: 30px;
    color: white;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
