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
  Title,
  ListUl,
  LinhaHabilliti,
  ContactContainer,
  ContainerSize,
} from './style_desktop'
import eu from '../../assets/eu.jpg'
import face from '../../assets/face.jpg'
import link from '../../assets/linkdin.jpg'

function HomeDesktop() {
  return (
    <Container>
      <ContainerImage>
        <ListContainer>
          <NameTitle>Gustavo F. Sohne</NameTitle>
          <Image src={eu} style={{ zIndex: '4' }} alt="imagem" />
        </ListContainer>
      </ContainerImage>
      <HabilitiesContainer>
        <ContainerSize>
          <TitleSou>
            QUEM SOU
            <Linha />
          </TitleSou>
          <TextSou>
            Sou desenvolvedor Node js e React js, formado no curso de Sistemas de Informação da
            Escola Técnica da UFRGS em Porto Alegre - RS
          </TextSou>
        </ContainerSize>

        {/* <RedesContainer> */}
        <Redes>
          <a href="http://facebook.com">
            <img src={face} width="30px" alt="facebook" style={{ marginRight: '28px' }} />
          </a>
          <img src={link} width="33px" alt="linkdin" />
        </Redes>
        {/* </RedesContainer> */}
      </HabilitiesContainer>
      <HabilitiesBox>
        <Title>
          Habilidades
          <LinhaHabilliti />
        </Title>
        <ListUl>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <li>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#005580',
                  width: '250px',
                  height: '170px',
                }}
              >
                Node js
              </div>
            </li>
            <li>
              {' '}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#004466',
                  width: '250px',
                  height: '170px',
                }}
              >
                {' '}
                React js
              </div>
            </li>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <li>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#004466',
                  width: '250px',
                  height: '170px',
                }}
              >
                HTML
              </div>
            </li>
            <li>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#005580',
                  width: '250px',
                  height: '170px',
                }}
              >
                CSS
              </div>
            </li>
          </div>
        </ListUl>
      </HabilitiesBox>
      <ContactContainer>
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#006699',
            color: 'white',
            fontSize: '38px',
            marginBottom: '20px',
            marginTop: '-1px',
          }}
        >
          <div style={{ marginTop: '80px', marginLeft: '-30px' }}>
            <TitleSou style={{ color: 'white', width: '500px' }}>
              DADOS PESSOAIS
              <Linha />
              <ul style={{ listStyle: 'none', marginLeft: '-40px', lineHeight: '40px' }}>
                <li style={{ fontSize: '21px' }}>Telefone: (51) 98457-6589</li>
                <li style={{ fontSize: '21px' }}>Email: gustavosohne38@gmail.com</li>
              </ul>
            </TitleSou>
          </div>
        </h1>

        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0088cc',
            color: 'white',
            fontSize: '38px',
            marginBottom: '20px',
            marginTop: '-1px',
          }}
        >
          <div style={{ marginTop: '80px', marginLeft: '-30px' }}>
            <TitleSou style={{ color: 'white', width: '500px' }}>
              DADOS PESSOAIS
              <Linha />
              <ul style={{ listStyle: 'none', marginLeft: '-40px', lineHeight: '40px' }}>
                <li style={{ fontSize: '21px' }}>Telefone: (51) 98457-6589</li>
                <li style={{ fontSize: '21px' }}>Email: gustavosohne38@gmail.com</li>
              </ul>
            </TitleSou>
          </div>
        </h1>
      </ContactContainer>
    </Container>
  )
}

export default HomeDesktop
