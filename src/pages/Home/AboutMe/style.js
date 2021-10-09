import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { headerHeightPercentage } from 'Constants'

export const Picture = styled.div`
  position: absolute;
  top: ${() => `${headerHeightPercentage}vh`};
  width: 15rem;
  height: 15rem;
  margin-top: -7.5rem;
  background-image: url('/images/picture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
  border: 0.5rem solid #e6f3ff;

  @media screen and (max-width: 720px) {
    width: 10rem;
    height: 10rem;
    margin-top: -5rem;
    top: ${() => `${headerHeightPercentage - 10}vh`};
  }
`

export const WhoIAm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e6f3ff;
  max-width: 60%;
  height: ${() => `${100 - headerHeightPercentage}vh`};

  @media screen and (max-width: 720px) {
    height: ${() => `${110 - headerHeightPercentage}vh`};
    padding: 1rem;
    width: 100%;
    max-width: 100%;
  }
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  @media screen and (max-width: 720px) {
    margin-top: 3rem;
    justify-content: space-between;
  }
`

export const ExtButton = styled(Link)`
  cursor: pointer;
  background: gray;
  color: #fff;
  border: 0px;
  padding: 1rem;
  width: 100%;
  max-width: 150px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: 0.25s;
  text-decoration: none;
  text-align: center;
  margin-left: 3rem;

  &:hover {
    background: dimgray;
  }

  @media screen and (max-width: 720px) {
    margin-left: 0;
  }
`
