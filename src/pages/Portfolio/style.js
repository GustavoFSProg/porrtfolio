import styled from 'styled-components'
import backImage from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${backImage});
  width: 100vw;
  /* height: 850px; */
  /* padding-top: 250px; */
  /* width: 100vw; */
  height: 100vh;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-top: -500px;
`

export const Title = styled.div``

export const ListContainer = styled.p`
  color: white;
  margin-top: -150px;
`

export const ItemBox = styled.div`
  width: 87%;
  height: 382px;
  background: #005580;

  margin-left: 25px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 7px;
  /* justify-content: center; */
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
