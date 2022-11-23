import React from 'react'
import { useHistory } from 'react-router'

import { Section } from 'components/Section'
import { Header } from 'components/Header'
import { Title } from 'components/Title'
import { Paragraph } from 'components/Paragraph'
import {  WhoIAm, Buttons, ExtButton, Picture } from './style'

export const AboutMe = () => {
  const { push } = useHistory()
  return (
    <Section>
      <Header>Gustavo S.</Header>
      <Picture />
      <WhoIAm>
        <Title>Quem sou</Title>
        <Paragraph>
          Sou desenvolvedor Node js e React js, formado no curso de Sistemas de Informação da Escola
          Técnica da UFRGS em Porto Alegre - RS
        </Paragraph>
        <Buttons>
          <button style={{ width: '120px' }} onClick={() => push('portfolio')}>
            Porfólio
          </button>
          <ExtButton to="docs/Curriculo.pdf" target="_blank">
            Currículo
          </ExtButton>
        </Buttons>
      </WhoIAm>
    </Section>
  )
}
