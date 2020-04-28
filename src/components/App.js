import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Main from './pages/Main'

import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: "Open Sans";
      src: url(${OpenSansRegular}) format("truetype");
      font-weight: 400;
      font-style: normal;
      font-display: swap;
  }

  *{
      font-family: "Open Sans";
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-weight: 400;
  }

  h1 {
    font-size: 50px;
    line-height: 54px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
`

export default function App () {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  )
}
