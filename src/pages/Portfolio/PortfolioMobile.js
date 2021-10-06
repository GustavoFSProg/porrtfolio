import { Container, Wrapper, Ancor, Title, ListContainer, ItemBox, Image, TitleBox } from './style'
import piano from '../../assets/piano.png'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <Container>
      <Wrapper>
        <Title>Portfólio</Title>
        <br />
        <br />
        <Link to="/" style={{ border: '1px solid orange', background: 'yellow' }}>
          Home
        </Link>
      </Wrapper>
      <ListContainer>
        <ItemBox>
          <Image src={piano} />
          <TitleBox>
            Site feito pra Professora de Piano divulgar aulas particulares de piano
            <p>
              <Ancor style={{}} href="http://www.pianopoa.com.br/">
                www.pianopoa.com.br
              </Ancor>
            </p>
          </TitleBox>
        </ItemBox>
      </ListContainer>
    </Container>
  )
}

export default Portfolio
