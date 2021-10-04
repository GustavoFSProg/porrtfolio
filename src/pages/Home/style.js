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
  margin-top: -500px;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-top: 325px;
`
export const Image = styled.img`
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
  background: #e6f3ff;
  width: 100vw;
  height: 700px;
  margin-top: 0px;
  z-index: 2;
`
export const TitleSou = styled.h1`
  font-size: 38px;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  margin-left: 180px;
  margin-top: -300px;
  width: 200px;
`

export const Linha = styled.div`
  width: 50px;
  height: 7px;
  background: red;
  margin-top: 20px;
`
export const TextSou = styled.h1`
  font-size: 17px;
  color: gray;
  margin-left: -200px;
  width: 480px;
  line-height: 27px;
  margin-top: -32px;
  text-align: justify;
`
export const Redes = styled.div`
  display: flex;
  align-items: center;
  margin-top: -350px;
  margin-left: 40px;
`
