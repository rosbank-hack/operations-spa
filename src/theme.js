import { createGlobalStyle } from 'styled-components';
import boldFont from './assets/fonts/MullerBold.woff2';
import regularFont from './assets/fonts/MullerRegular.woff2';
import mediumFont from './assets/fonts/MullerMedium.woff2';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MyMuller';
    src: local('MyMullerBold'), local('MyMullerRegular'), local('MyMullerMedium'),
        url(${boldFont}) format('woff2'),
        url(${regularFont}) format('woff2'),
        url(${mediumFont}) format('woff2');
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    background-color: rgb(235, 236, 239);
    font-family: MyMullerBold, MyMullerMedium, MyMullerRegular, Arial, Helvetica, sans-serif;
  }
`;

const colors = {
  black: '#000',
};

export const theme = {
  text: colors.black,
};
