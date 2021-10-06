import styled from 'styled-components'
import backImage from '../../assets/background.png'
import pc from '../../assets/pc.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 1840px;
`

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${backImage});
  width: 100%;
  height: 620px;
  padding-top: 50px;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-top: 300px;
`
export const Image = styled.img`
  border-radius: 100%;
  width: 25%;
  height: auto;
  margin-top: -20px;
`

export const NameTitle = styled.h1`
  font-size: 78px;
  color: white;
  margin-bottom: 65px;
  font-family: 'Roboto';
`
export const HabilitiesContainer = styled.div`
  display: flex;
  align-items: center;
  background: #e6f3ff;
  width: 100vw;
  padding-bottom: 200px;
  margin-top: 0px;
  z-index: 2;
`

export const HabilitiesBox = styled.div`
  display: flex;
  align-items: center;
  background: url(${pc});
  padding-bottom: 48px;
  width: 100vw;
  height: 800px;
  z-index: 2;
`
export const Title = styled.h1`
  font-size: 38px;
  color: white;
  font-family: 'Roboto';
  margin-left: -40px;
  margin-top: -320px;
`
export const TitleSou = styled.h1`
  font-size: 38px;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  margin-left: 60px;
  margin-top: -40px;
  width: 780px;
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
  margin-left: 55px;
  width: 45%;
  line-height: 27px;
  margin-top: 38px;
  text-align: justify;
`

export const Redes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-left: -440px;
`
export const ListUl = styled.ul`
  list-style: none;
  font-family: 'Roboto';
  color: white;
  font-size: 28px;
  font-weight: bold;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  margin-top: 160px;
  margin-left: -170px;
`

export const LinhaHabilliti = styled.div`
  width: 55px;
  height: 7px;
  background: white;
  margin-top: 20px;
`

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  width: 100vw;
  height: 700px;

  margin-top: 0px;
`

export const ContainerSize = styled.div`
  margin-left: 200px;
  margin-top: 240px;
`
