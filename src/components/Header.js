import styled from 'styled-components'
import { headerHeightPercentage } from 'Constants'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${() => `${headerHeightPercentage}vh`};
  width: 100%;
  background: url('/images/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 720px) {
    height: ${() => `${headerHeightPercentage - 10}vh`};
  }
`

const HTitle = styled.h1`
  font-size: 5rem;
  color: #fff;
  font-family: 'Roboto';
  margin-top: -3rem;

  @media screen and (max-width: 720px) {
    font-size: 2.5rem;
  }
`

export const Header = ({ children }) => (
  <StyledHeader>
    <HTitle>{children}</HTitle>
  </StyledHeader>
)
