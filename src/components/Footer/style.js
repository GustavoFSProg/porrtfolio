import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #004466;
  height: 20vh;
  max-height: 20vh;

  @media screen and (max-width: 720px) {
    padding-left: 2rem;
    width: 105%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: -1.5rem;
  width: 80%;
  max-width: 80%;

  @media screen and (max-width: 720px) {
    margin-bottom: -1.5rem;
  }
`

export const Title = styled.h1`
  color: #fff;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`

export const Link = styled.a`
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: lightgray;
  }
`
