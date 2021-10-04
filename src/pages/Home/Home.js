import {
  Container,
  ContainerImage,
  HabilitiesContainer,
  ListContainer,
  NameTitle,
  Image,
} from './style'
import eu from '../../assets/eu.jpg'

function Home() {
  return (
    <Container>
      <ContainerImage>
        <ListContainer>
          <NameTitle>Gustavo F. Sohne</NameTitle>
          <Image src={eu} style={{ zIndex: '4' }} />
        </ListContainer>
      </ContainerImage>
      <HabilitiesContainer></HabilitiesContainer>
    </Container>
  )
}

export default Home
