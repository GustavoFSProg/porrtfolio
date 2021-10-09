import { Link as L } from 'react-router-dom'
import styled from 'styled-components'
import { headerHeightPercentage } from 'Constants'

export const StyledHeader = styled.div`
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

export const HTitle = styled.h1`
  font-size: 5rem;
  color: #fff;
  font-family: 'Roboto';
  margin-top: -3rem;

  @media screen and (max-width: 720px) {
    font-size: 2.5rem;
  }
`

export const Link = styled(L)`
  position: absolute;
  left: 15%;
  top: ${() => `${headerHeightPercentage}vh`};
  margin-top: -5rem;
  color: #fff;
`

export const GoBackIcon = styled.svg`
  width: 5rem;
  height: 5rem;
  &:hover {
    svg {
      stroke: #df3143;
    }
  }

  @media screen and (max-width: 720px) {
    margin-top: -145px;
  }
`
