import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-family: 'Source Sans Pro';
  color: ${({ color }) => color || '#222'};
  font-size: 2.6rem;
  text-align: left;

  @media screen and (max-width: 720px) {
    font-size: 2rem;
  }
`

const UnderLine = styled.div`
  background: #df3143;
  width: 50px;
  height: 7px;
  margin: 0.5rem 0 2rem 0;

  @media screen and (max-width: 720px) {
    height: 4px;
    margin: 0.3rem 0 2rem 0;
  }
`

export const Title = ({ color, children }) => (
  <>
    <StyledTitle color={color}>{children}</StyledTitle>
    <UnderLine />
  </>
)
