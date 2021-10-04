import styled from 'styled-components'
import backImage from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 200vh;
`

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${backImage});
  width: 100vw;
  height: 560px;
  margin-top: -380px;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-top: 325px;
`
export const Image = styled.img`
  /* margin-top: 510px; */
  border-radius: 100%;
  width: 40%;
  height: auto;
`
export const NameTitle = styled.h1`
  font-size: 75px;
  color: white;
  margin-bottom: 65px;
  font-family: 'Roboto';
`
export const HabilitiesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e6f3ff;
  width: 100vw;
  height: 700px;
  margin-top: 0px;
  z-index: 2;
`
