import styled from 'styled-components'
import backImage from 'assets/background.png'
import pic from 'assets/picture.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65vh;
  background: #e6f3ff;
  padding: 0 20vw;
`

export const Title = styled.h1`
  font-family: 'Source Sans Pro';
  color: black;
  font-size: 3rem;
`

export const Paragraph = styled.div`
  font-family: 'Roboto';
  color: gray;
  font-size: 1.2rem;
  line-height: 160%;
`

export const Skills = styled.div`
  height: 100vh;
  background: lightgray;
`

export const SkillTitle = styled.div`
  font-family: 'Source Sans Pro';
  color: black;
  font-size: 4rem;
`

export const Info = styled.div`
  height: 100vh;
  background: lightpink;
`

export const Contact = styled.div``

export const ContactTitle = styled.div``
