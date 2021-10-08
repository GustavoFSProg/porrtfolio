import React from 'react'

import { Container, Header, WhoIAm, Title, HeaderTitle, Paragraph } from './style'

export default function AboutMe() {
  return (
    <>
      <Header>
        <HeaderTitle>Gustavo F. Sohne</HeaderTitle>
        {/* <Picture /> */}
      </Header>

      <>
        <WhoIAm>
          <Title>QUEM SOU</Title>
          <Paragraph>
            Sou desenvolvedor Node js e React js, formado no curso de Sistemas de Informação da
            Escola Técnica da UFRGS em Porto Alegre - RS
          </Paragraph>
        </WhoIAm>
      </>
    </>
  )
}
