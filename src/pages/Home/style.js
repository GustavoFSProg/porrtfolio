import styled from 'styled-components'
import backImage from '../../assets/background.png'
import pc from '../../assets/pc.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 340vh;

  @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 300vh;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  background: url(${backImage});
  width: 100%;
  height: 250px;

  /* margin-top: -290px; */

  /* @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: url(${backImage});
    width: 100vw;
    height: 560px;

    margin-top: 0px;
  } */
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  margin-top: 325px;
  @media screen and (min-width: 500px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    margin-top: 325px;
  }
`
export const Image = styled.img`
  border-radius: 100%;
  width: 40%;
  height: auto;

  @media screen and (min-width: 500px) {
    border-radius: 100%;
    width: 40%;
    height: auto;
  }
`
export const ContainerFoto = styled.div`
  @media screen and (max-width: 600px) {
    height: 60px;
  }
`

export const NameTitle = styled.h1`
  font-size: 75px;
  color: white;
  margin-bottom: 65px;
  font-family: 'Roboto';

  @media screen and (max-width: 600px) {
    font-size: 28px;
    margin-top: -220px;
  }
`
export const HabilitiesContainer = styled.div`
  display: flex;
  align-items: center;
  background: #e6f3ff;
  width: 100vw;
  height: 900px;
  padding-bottom: 100px;
  margin-top: 0px;
  z-index: 2;

  @media screen and (min-width: 500px) {
    display: flex;
    align-items: center;
    background: #e6f3ff;
    width: 100vw;
    height: 700px;
    margin-top: 0px;
    z-index: 2;
  }
`

export const HabilitiesBox = styled.div`
  display: flex;
  align-items: center;
  background: url(${pc});

  width: 100vw;
  height: 700px;
  /* margin-top: 100px; */
  z-index: 2;

  @media screen and (min-width: 500px) {
    display: flex;
    align-items: center;
    background: url(${pc});

    width: 100vw;
    height: 700px;
    margin-top: 0px;
    z-index: 2;
  }
`
export const Title = styled.h1`
  font-size: 38px;
  color: white;
  font-family: 'Roboto';
  margin-left: 120px;
  margin-top: -320px;

  @media screen and (min-width: 500px) {
    font-size: 38px;
    color: white;
    font-family: 'Roboto';
    margin-left: 120px;
    margin-top: -320px;
  }
`
export const TitleSou = styled.h1`
  font-size: 38px;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  margin-left: 60px;
  margin-top: -40px;
  width: 780px;

  @media screen and (min-width: 500px) {
    font-size: 38px;
    font-family: 'Source Sans Pro', sans-serif;
    color: black;
    margin-left: 180px;
    margin-top: -270px;
    width: 200px;
  }
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
  margin-left: -800px;
  width: 230px;
  line-height: 27px;
  margin-top: 208px;
  text-align: justify;

  @media screen and (min-width: 500px) {
    font-size: 17px;
    color: gray;
    margin-left: -200px;
    width: 480px;
    line-height: 27px;
    margin-top: -32px;
    text-align: justify;
  }
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
  font-size: 28px;
  font-weight: bold;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  margin-top: 160px;
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
`
