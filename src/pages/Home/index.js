import { AboutMe } from './AboutMe'
import { Skills } from './Skills'
import { Info } from './Info'
import { Container } from './style'

export const Home = () => (
  <Container>
    <AboutMe />
    <Skills />
    <Info />
  </Container>
)
