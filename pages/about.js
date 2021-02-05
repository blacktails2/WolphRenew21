import Head from 'next/head'
import styled from 'styled-components'
import Menus from '../components/menus'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Container from '../components/container'
import Image from 'next/image'

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
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <h2 className='about__poem'>Type for Everything.<br />Type in Everything.</h2>
                </div>
              </div>
              <div className='introduce'>

              </div>
              <div className='introduce'>
                <div className='columns'>
                  <div className='column is-3 is-offset-1'>
                    <h3 className='introduce__head'>About Wolph</h3>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      Wolf + Glyph = Wolph.<br />
                      書体とタイポグラフィを主として書体デザイン、グラフィックデザイン、Webデザインを中心に活動しています。
                    </p>
                    <div className="introduce__logo">
                      <Image
                      src='/assets/logo.svg'
                      alt='Wolphのロゴマーク'
                      width={420}
                      height={135}
                      />
                    </div>
                  </div>
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
.introduce{
  margin-top: 84px;
  &__head{
    font-size: 24px;
    font-family: 'Koga Sans Medium', sans-serif;
    line-height: 28px;
  }
  &__body{
    font-size: 16px;
    font-family: 'Koga Sans Regular', TazuganeGothicStdN-Book, sans-serif;
    line-height:28px;
  }
  &__logo{
    margin-top: 84px;
  }
}
`
