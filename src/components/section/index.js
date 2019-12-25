import React from "react"
import styled from "styled-components"

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
      {title && <h1>{title}</h1>}
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Section
