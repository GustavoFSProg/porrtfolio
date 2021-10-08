import React from 'react'
import { useHistory } from 'react-router'

import { Section } from 'components/Section'
import { Title } from 'components/Title'
import { Paragraph } from 'components/Paragraph'
import { Header, HTitle, Picture, WhoIAm, Buttons, Button } from './style'

export const AboutMe = () => {
  const { push } = useHistory()

  return (
    <Section>
      <Header>
        <HTitle>Gustavo F. Sohne</HTitle>
      </Header>

      <Picture />

      <WhoIAm>
        <Title>Quem sou</Title>

        <Paragraph>
          Sou desenvolvedor Node js e React js, formado no curso de Sistemas de Informação da Escola
          Técnica da UFRGS em Porto Alegre - RS
        </Paragraph>

        <Buttons>
          <Button onClick={() => push('portfolio')}>Porfólio</Button>
          <Button ml={3}>Currículo</Button>
        </Buttons>
      </WhoIAm>
    </Section>
  )
}
