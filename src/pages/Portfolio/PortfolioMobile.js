import { Container, Wrapper, Ancor, Title, ListContainer, ItemBox, Image, TitleBox } from './style'
import piano from '../../assets/piano2.png'
import cello from '../../assets/jogos2.png'
import letmeask from '../../assets/letmeask2.png'
import happy from '../../assets/happy2.png'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <Container>
      <Wrapper>
        <Title>Portfólio</Title>
        <br />
        <br />
        <Link
          to="/"
          style={{
            color: 'white',
            fontSize: '15px',
            background: 'gray',
            textDecoration: 'none',
            fontWeight: 'bold',
            width: '110px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '-150px',
          }}
        >
          Home
        </Link>
      </Wrapper>

      <ListContainer>
        <ItemBox>
          <Image src={piano} />
          <TitleBox>
            Site para Professora de Piano divulgar aulas particulares de piano
            <p>
              <Ancor href="http://www.pianopoa.com.br/">pianopoa.com.br</Ancor>
            </p>
          </TitleBox>
        </ItemBox>
      </ListContainer>

      <ListContainer>
        <ItemBox style={{ marginTop: '-25px', paddingBottom: '15px' }}>
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

      <ListContainer>
        <ItemBox style={{ marginTop: '-25px', paddingBottom: '15px' }}>
          <Image src={letmeask} />
          <TitleBox>
            Site Desenvolvido a partir do curso NLW da Rocketseat alunos
            <p>
              <Ancor style={{}} href="https://letmeask-course.netlify.app/">
                Letmeask
              </Ancor>
            </p>
          </TitleBox>
        </ItemBox>
      </ListContainer>

      <ListContainer>
        <ItemBox style={{ marginTop: '-25px', paddingBottom: '15px' }}>
          <Image src={happy} />
          <TitleBox>
            Site Desenvolvido a partir do curso NLW da Rocketseat alunos
            <p>
              <Ancor style={{}} href="https://happy-app-course.netlify.app/">
                Happy
              </Ancor>
            </p>
          </TitleBox>
        </ItemBox>
      </ListContainer>
    </Container>
  )
}

export default Portfolio
