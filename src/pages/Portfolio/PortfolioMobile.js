import { Container, Wrapper, Ancor, Title, ListContainer, ItemBox, Image, TitleBox } from './style'
import piano from '../../assets/piano.png'
import cello from '../../assets/jogoscello.png'
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
        <ItemBox style={{ paddingBottom: '10px' }}>
          <Image src={piano} />
          <TitleBox>
            Site para Professora de Piano divulgar aulas particulares de piano
            <p>
              <Ancor style={{}} href="http://www.pianopoa.com.br/">
                pianopoa.com.br
              </Ancor>
            </p>
          </TitleBox>
        </ItemBox>
      </ListContainer>

      <ListContainer>
        <ItemBox style={{ marginTop: '-25px', paddingBottom: '30px' }}>
          <Image src={cello} />
          <TitleBox>
            Site para divulgar jogos para alunos de violoncello para professores aplicarem aos
            alunos
            <p>
              <Ancor style={{}} href="https://jogoscello.com/">
                jogoscello.com
              </Ancor>
            </p>
          </TitleBox>
        </ItemBox>
      </ListContainer>
    </Container>
  )
}

export default Portfolio
