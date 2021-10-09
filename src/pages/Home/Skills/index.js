import { Section } from 'components/Section'
import { Title } from 'components/Title'
import { Container, Group, Tech } from './style'

export const Skills = () => (
  <Section bkgImg="/images/notebook.png" height={80}>
    <Container>
      <Title color="#fff">Habilidades</Title>
      <Group>
        <Tech>Node JS</Tech>
        <Tech dark>HTML</Tech>
        <Tech dark>React JS</Tech>
        <Tech>CSS</Tech>
      </Group>
    </Container>
  </Section>
)
