import React, { useEffect } from 'react'
import { AboutMe } from './AboutMe'
import { Skills } from './Skills'
import { Container } from './style'

export const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [])
  return (
    <Container>
      <AboutMe />
      <HrefFFrererer>AAA</HrefFFrererer>
      <Skills />
    </Container>
  )
}
