import {
  Container,
  Wrapper,
  Ancor,
  Title,
  ListContainer,
  ItemBox,
  Image,
  TitleBox,
  Link,
} from './style'

export const Desktop = () => (
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
      <ItemBox style={{ marginTop: '-25px', paddingBottom: '60px' }}>
        <Image src="/images/jogos.png" />
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
      <ItemBox style={{ marginTop: '-25px', paddingBottom: '35px' }}>
        <Image src="/images/letmeask.png" />
        <TitleBox>
          Site Desenvolvido a partir do curso NLW da Rocketseat
          <p>
            <Ancor href="https://letmeask-course.netlify.app/">Letmeask</Ancor>
          </p>
        </TitleBox>
      </ItemBox>
    </ListContainer>
  </Container>
)
