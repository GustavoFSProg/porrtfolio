import styled from 'styled-components'

const headerHeighPercentage = 35

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${() => `${headerHeighPercentage}vh`};
  width: 100%;
  background: url('/images/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const HTitle = styled.h1`
  font-size: 4.5rem;
  color: white;
  font-family: 'Roboto';
`

export const Picture = styled.div`
  position: absolute;
  top: ${() => `${headerHeighPercentage}vh`};
  width: 150px;
  height: 150px;
  margin-top: -75px;
  background-image: url('/images/picture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 100px;
`

export const WhoIAm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e6f3ff;
  max-width: 60%;
  height: ${() => `${100 - headerHeighPercentage}vh`};
`

export const Buttons = styled.div`
  margin-top: 1rem;
`

export const Button = styled.button`
  margin-left: ${({ ml }) => `${ml}rem` || '0'};
`
