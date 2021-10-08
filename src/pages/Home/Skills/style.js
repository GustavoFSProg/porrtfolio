import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60%;
`

export const Group = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: auto auto;
  background-color: #005580;
  max-width: 500px;
  margin-top: 3rem;
`

export const Tech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 170px;
  background: ${({ dark }) => (dark ? '#004466' : 'inherit')};
  font-size: 2rem;
  font-weight: 600;
`
