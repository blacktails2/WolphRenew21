import Head from 'next/head'
import styled from 'styled-components'
import Menus from '../components/menus'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Container from '../components/container'

export default function About() {
  return (
    <Layout>
      <>
        <title>Wolph</title>
        <link rel="icon" href="/favicon.ico" />
      </>
        <Menus />
        <StyledAbout>
          <Container>
            <div className='about'>
              <div className='row'>
                <div className='column column-80 column-offset-10'>
                  <h2 className='about__poem'>Type for Everything.<br />Type in Everything.</h2>
                </div>
              </div>
            </div>
          </Container>
        </StyledAbout>
      <Footer />
      </Layout>
  )
}

const StyledAbout = styled.div`
.about{
  margin-top: 50px;
  margin-bottom: 300px;
  &__poem{
    font-family: 'Koga Sans Regular', sans-serif;
    font-size: 46px;
    line-height: 56px;
    font-weight: normal;
    text-align: right;
    color: #0B4D58;
  }
}
`
