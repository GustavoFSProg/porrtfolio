import {
  Container,
  ContainerImage,
  HabilitiesContainer,
  ListContainer,
  NameTitle,
  Image,
  TitleSou,
  Linha,
  TextSou,
  Redes,
  HabilitiesBox,
} from './style'
import eu from '../../assets/eu.jpg'
import face from '../../assets/face.jpg'
import link from '../../assets/linkdin.jpg'

function Home() {
  return (
    <Container>
      <ContainerImage>
        <ListContainer>
          <NameTitle>Gustavo F. Sohne</NameTitle>
          <Image src={eu} style={{ zIndex: '4' }} />
        </ListContainer>
      </ContainerImage>
      <HabilitiesContainer>
        <TitleSou>
          QUEM SOU
          <Linha />
        </TitleSou>
        <TextSou>
          Sou desenvolvedor Node js e React js, formado no curso de Sistemas de Informação da Escola
          Técnica da UFRGS em Porto Alegre - RS
        </TextSou>
        <Redes>
          <a href="http://facebook.com">
            <img src={face} width="30px" alt="facebook" style={{ marginRight: '9px' }} />
          </a>
          <img src={link} width="33px" alt="linkdin" />
        </Redes>
      </HabilitiesContainer>
      <HabilitiesBox></HabilitiesBox>
    </Container>
  )
}

export default Home
