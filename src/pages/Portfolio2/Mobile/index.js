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
  Link,
} from './style'

export const Mobile = () => (
  <Container>
    <Wrapper>
      <Title>Portfólio</Title>
      <br />
      <br />
      <Link to="/">Home</Link>
    </Wrapper>

    <ListContainer>
      <ItemBox>
        <Image src="/images/jordana-brusa.png" />
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
        <Image src="/images/jogos2.png" />
        <TitleBox>
          Site para divulgar jogos para alunos de violoncello para professores aplicarem aos alunos
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
        <Image src="/images/letmeask2.png" />
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
      <ItemBox style={{ marginTop: '-25px', paddingBottom: '15px', height: '220px' }}>
        <TitleSou style={{ color: '#fff', width: '280px', fontSize: '15px' }}>
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
