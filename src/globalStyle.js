import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-scroll';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  html, body {

    @media screen and (max-width: 768px) {
      overflow-x: hidden;
    }
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#transparent' : '#d6c300')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#d6c300' : '#0c0c0c')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 2px solid #d6c300;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
  transition: all 0.2s ease-in-out;
  color: ${({ dark }) => (dark ? '#0c0c0c' : '#d6c300')};
  background: ${({ primary }) => (primary ? '#d6c300' : 'transparent')};
  }
`;

export default GlobalStyle;