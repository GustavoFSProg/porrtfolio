import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60%;

  @media screen and (max-width: 720px) {
    max-width: 100%;
    padding: 1rem;
  }
`

export const Group = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: auto auto;
  background-color: #005580;
  max-width: 500px;
  margin-top: 3rem;

  @media screen and (max-width: 720px) {
    max-width: 300px;
  }
`

export const Tech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 170px;
  background: ${({ dark }) => (dark ? '#004466' : 'inherit')};
  font-size: 2rem;
  font-weight: 600;

  @media screen and (max-width: 720px) {
    font-size: 1.8rem;
    height: 130px;
  }
`
