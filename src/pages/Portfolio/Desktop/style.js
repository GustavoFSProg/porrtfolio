import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('/images/background.png');
  width: 100vw;
  /* height: 850px; */
  /* padding-top: 250px; */
  /* width: 100vw; */
  height: auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-top: -150px;
`

export const Title = styled.span`
  color: #002633;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 3px;
`

export const ListContainer = styled.p`
  color: white;
  margin-top: 50px;
`
export const TitleSou = styled.h1`
  font-size: 38px;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
  margin-left: 45px;
  margin-top: -40px;
  width: 40px;
`

export const ItemBox = styled.div`
  width: 50%;
  height: 520px;
  background: #005580;

  margin-left: 270px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  padding-bottom: 35px;
`
export const Ancor = styled.a`
  text-decoration: none;
  color: #cccccc;

  :hover {
    color: #a6a6a6;
  }
`
export const Image = styled.img`
  width: 80%;
  margin-top: 20px;
  border-radius: 10px;
`

export const TitleBox = styled.div`
  color: white;
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  width: 270px;
  text-align: center;
  line-height: 22px;
`
