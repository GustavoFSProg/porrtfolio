import { Paragraph } from 'components/Paragraph'
import { Wrapper, Container, Title, Link } from './style'

export const Footer = () => (
  <Wrapper>
    <Container>
      <Title>Contato</Title>
      <Paragraph color="#fff">
        +55 (51) 98457-6589
        <br />
        <Link target="_blank" href="mailto:gustavosohne38@gmail.com" rel="noreferrer">
          gustavo38@gmail.com
        </Link>
      </Paragraph>
    </Container>
  </Wrapper>
)
