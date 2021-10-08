import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #0088cc;
`

export const Side = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background: ${({ dark }) => (dark ? '#006699' : 'inherit')};
  padding-left: 6rem;
`
