import React, { useEffect } from 'react'
import { Header } from 'components/Header'
import { Title } from 'components/Title'

import { Content, Card, Description, Image } from './style'

const clients = [
  {
    title: 'Piano Poa',
    description: 'Site para Professora de Piano divulgar aulas particulares de piano',
    image: '/images/jordana-brusa.png',
    link: 'http://www.pianopoa.com.br/',
  },
  {
    title: 'Jogos Cello',
    description:
      'Site para divulgar jogos para alunos de violoncello para professores aplicarem aos alunos',
    image: '/images/jogos.png',
    link: 'https://jogoscello.com/',
  },
  {
    title: 'Letmeask',
    description: 'Site Desenvolvido a partir do curso NLW da Rocketseat',
    image: '/images/letmeask.png',
    link: 'https://letmeask-course.netlify.app/',
  },
]

export const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [])
  return (
    <>
      <Header>Portfólio</Header>
      <Content>
        {clients.map((client) => (
          <Card key={client.title}>
            <Title color="#fff">{client.title}</Title>
            <Image src={client.image} href={client.link} target="_blank" rel="noreferrer" />
            <Description>{client.description}</Description>
          </Card>
        ))}
      </Content>
    </>
  )
}
