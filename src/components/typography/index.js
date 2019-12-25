import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import PFDBlack from '../../fonts/PlayfairDisplay-Black.ttf'
import PFDBlackItalic from '../../fonts/PlayfairDisplay-BlackItalic.ttf'
import PFDBold from '../../fonts/PlayfairDisplay-Bold.ttf'
import PFDBoldItalic from '../../fonts/PlayfairDisplay-BoldItalic.ttf'
import PFDItalic from '../../fonts/PlayfairDisplay-Italic.ttf'
import PFDRegular from '../../fonts/PlayfairDisplay-Regular.ttf'

const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'Playfair Display', serif;
    src: local('Playfair Display'), local('Playfair Display'),
    url(${PFDBlack}) format('ttf'),
    url(${PFDBlackItalic}) format('ttf'),
    url(${PFDBold}) format('ttf'),
    url(${PFDBoldItalic}) format('ttf'),
    url(${PFDItalic}) format('ttf'),
    url(${PFDRegular}) format('ttf'),
    font-weight: 300;
    font-style: normal;
}
`

const Heading1 = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3em;
`

const H1 = ({ children }) => {
  return <Heading1>{children}</Heading1>
}

export { GlobalFontStyle, H1 }
