import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color || '#e6f3ff'};
  background: url(${({ bkgImg }) => bkgImg || null});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
`
