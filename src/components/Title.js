import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-family: 'Source Sans Pro';
  color: ${({ color }) => color || 'black'};
  font-size: 2.6rem;
  text-align: left;
`

const UnderLine = styled.div`
  background: red;
  width: 50px;
  height: 7px;
  margin: 0.5rem 0 2rem 0;
`

export const Title = ({ color, children }) => (
  <>
    <StyledTitle color={color}>{children}</StyledTitle>
    <UnderLine />
  </>
)
