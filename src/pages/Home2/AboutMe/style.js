import styled from 'styled-components'
import backImage from 'assets/background.png'
import pic from 'assets/picture.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e6f3ff;
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35vh;
  width: 100%;
  background: url(${backImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

export const HeaderTitle = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: white;
  font-family: 'Roboto';
`

export const Picture = styled.div`
  min-width: 15rem;
  min-height: 15rem;
  background-image: url(${pic});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`

export const WhoIAm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e6f3ff;
  width: 100%;
  height: 65vh;
  padding: 0 30rem 0 30rem;
`

export const Title = styled.h1`
  font-family: 'Source Sans Pro';
  color: black;
  /* font-size: 3rem; */
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: gray;
  /* font-size: 1rem; */
  line-height: 160%;
  width: 450px;
  text-align: justify;
`
