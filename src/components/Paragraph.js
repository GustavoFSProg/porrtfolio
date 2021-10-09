import styled from 'styled-components'

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: ${({ color }) => (color ? '#fff' : 'none')};
  width: 450px;
  margin-bottom: 2rem;

  @media screen and (max-width: 720px) {
    font-size: 1.1rem;
    width: inherit;
    margin-bottom: 0.5rem;
  }
`
