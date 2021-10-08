import styled from 'styled-components'

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: ${({ color }) => color || 'gray'};
  width: 450px;
  text-align: justify;
  margin-bottom: 2rem;
`
