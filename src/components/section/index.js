import React from 'react'
import styled from 'styled-components'
import { H1 } from '../typography/index'

const Wrapper = styled.section`
  display: block;
  margin: 40px auto;
  max-width: 1300px;
  text-align: center;
`

const Container = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`

const Section = ({ children, title }) => {
  return (
    <Wrapper>
      {title && <H1>{title}</H1>}
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Section
