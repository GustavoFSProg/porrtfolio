import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #006699;
  border-radius: 0.5rem 8rem 0.5rem;
  width: 800px;
  padding: 1rem 2rem 2rem 2rem;
  color: #fff;
  margin-bottom: 2rem;
`

export const Description = styled.p`
  text-align: right;
  font-family: 'Source Sans Pro';
  font-size: 1.4rem;
  padding-top: 2rem;
`

export const Image = styled.a`
  align-self: center;
  background: ${({ src }) => `url(${src})`};
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 600px;
  height: 400px;
  border-radius: 5rem 1rem 5rem 1rem;
  border: 2px solid #004466;
  transition: filter 0.5s;
  transition: border-color 1.5s;

  &:hover {
    filter: brightness(0.8);
    border-color: #df3143;
  }
`
