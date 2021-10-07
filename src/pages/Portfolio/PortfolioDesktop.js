import {
  Container,
  TitleSou,
  Wrapper,
  Ancor,
  Title,
  ListContainer,
  ItemBox,
  Image,
  TitleBox,
} from './styleDesktop'
import piano from '../../assets/piano2.png'
import cello from '../../assets/jogos2.png'
import letmeask from '../../assets/letmeask2.png'
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
            marginLeft: '-510px',
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
        <ItemBox style={{ marginTop: '-25px', paddingBottom: '40px' }}>
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
        <ItemBox style={{ marginTop: '-25px', paddingBottom: '25px' }}>
          <Image src={letmeask} />
          <TitleBox>
            Site Desenvolvido a partir do curso NLW da Rocketseat
            <p>
              <Ancor style={{}} href="https://letmeask-course.netlify.app/">
                Letmeask
              </Ancor>
            </p>
          </TitleBox>
        </ItemBox>
      </ListContainer>
      <ListContainer>
        <ItemBox
          style={{
            marginTop: '25px',
            marginLeft: '-20px',
            height: '220px',
            width: '99vw',
          }}
        >
          <TitleSou style={{ color: 'white', width: '280px', fontSize: '15px' }}>
            <h1 style={{ marginTop: '70px' }}>CONTATO</h1>
            <ul style={{ listStyle: 'none', marginLeft: '-40px', lineHeight: '40px' }}>
              <li style={{ fontSize: '15px', letterSpacing: '1px' }}>Telefone: (51) 98457-6589</li>
              <li style={{ fontSize: '15px', letterSpacing: '1px' }}>
                Email: gustavosohne38@gmail.com
              </li>
            </ul>
          </TitleSou>
        </ItemBox>
      </ListContainer>
    </Container>
  )
}

export default Portfolio
