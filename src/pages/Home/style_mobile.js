import styled from 'styled-components'
import backImage from '../../assets/background.png'
import pc from '../../assets/pc.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${backImage});
  width: 100vw;
  height: 750px;

  @media screen and (min-width: 600px) {
    margin-top: 770px;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100px; */
  /* background: red; */

  align-items: center;
  justify-content: center;
  margin-top: 142px;
`

export const Image = styled.img`
  border-radius: 100%;
  width: 40%;
  height: auto;
  /* margin-top: 340px; */

  /* @media screen and (max-width: 700px) {
    /* height: 350px; */
  /* margin-top: -80px; */
  /* }  */
`
export const ContainerFoto = styled.div`
  @media screen and (max-width: 600px) {
    height: 60px;
  }
`

export const NameTitle = styled.h1`
  font-size: 28px;
  color: white;
  /* background: green; */
  margin-top: 305px;
  font-family: 'Roboto';
`
export const HabilitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background: #e6f3ff;
  width: 100vw;
  height: 500px;
  padding-bottom: 70px;
  z-index: 2;

  @media screen and (min-width: 500px) {
    margin-top: 250px;
  }

  /* @media screen and (min-width: 500px) {
    height: 300px;
  } */
`

export const HabilitiesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${pc});

  width: 100vw;
  height: 700px;
  margin-top: 0px;
  z-index: 2;
  padding-bottom: 20px;

  /* @media screen and (max-width: 600px) {
    display: none;
  } */
`
export const Title = styled.h1`
  font-size: 28px;
  color: white;
  font-family: 'Roboto';
  margin-left: -60px;
  margin-top: 42px;
`
export const TitleSou = styled.h1`
  font-size: 38px;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
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
  /* margin-right: 200px; */
  /* margin-left: -680px; */
  width: 220px;
  line-height: 27px;
  /* margin-top: 250px; */
  text-align: justify;
`

export const RedesContainer = styled.div`
  @media screen and (max-width: 700px) {
    margin-right: 120px;
  }
`
export const Redes = styled.div`
  display: flex;
  align-items: center;
  margin-top: -350px;
  margin-left: 40px;

  @media screen and (max-width: 700px) {
    flex-direction: row;
    /* margin-right: 300px; */
    margin-top: 270px;
    display: none;
  }
`
export const ListUl = styled.ul`
  list-style: none;
  font-family: 'Roboto';
  color: white;
  font-size: 16px;
  font-weight: bold;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: -55px;
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
  /* align-items: center; */

  width: 100vw;
  height: 700px;
  margin-top: 0px;

  @media screen and (min-width: 500px) {
    margin-top: 250px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`

export const ContainerSize = styled.div`
  margin-left: 55px;
  margin-top: 60px;
`
