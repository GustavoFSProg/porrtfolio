import React from 'react'

import AboutMe from './AboutMe'
import { Container, Paragraph, Skills, SkillTitle, Info, Contact, ContactTitle } from './style'

export default function Home() {
  return (
    <Container>
      <AboutMe />

      <Skills>
        <SkillTitle>Habilidades</SkillTitle>
        {/* colocar componente quadrado */}
      </Skills>

      <Info>
        <Contact>
          <ContactTitle>DADOS PESSOAIS</ContactTitle>
          <Paragraph>Telefone: (51) 98457-6589</Paragraph>
          <Paragraph>Email: gustavosohne38@gmail.com</Paragraph>
        </Contact>

        <Contact>
          <ContactTitle>DADOS PESSOAIS</ContactTitle>
          <Paragraph>Telefone: (51) 98457-6589</Paragraph>
          <Paragraph>Email: gustavosohne38@gmail.com</Paragraph>
        </Contact>
      </Info>
    </Container>
  )
}
