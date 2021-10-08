import { Section } from 'components/Section'
import { Title } from 'components/Title'
import { Paragraph } from 'components/Paragraph'
import { Container, Side } from './style'

export const Info = () => (
  <Section>
    <Container>
      <Side dark>
        <Title color="white">Contato</Title>
        <Paragraph color="white">
          Telefone: (51) 98457-6589
          <br />
          Email: gustavosohne38@gmail.com
        </Paragraph>
      </Side>

      <Side>
        <Title color="white">Contato</Title>
        <Paragraph color="white">
          Telefone: (51) 98457-6589
          <br />
          Email: gustavosohne38@gmail.com
        </Paragraph>
      </Side>
    </Container>
  </Section>
)
