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
        <StyledAbout>
          <Container>
            <div className='about'>
              <div className='columns is-variable is-8'>
                <div className='column is-10 is-offset-1'>
                  <h2 className='about__poem'>Type for Everything.<br />Type in Everything.</h2>
                </div>
              </div>
              <div className='introduce'>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h3 className='introduce__head'>Masaki Ando</h3>
                    <h4 className='introduce__subhead'>安藤 真生</h4>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      Designer: Typeface, Typography, Graphic, Web
                    </p>
                  </div>
                </div>
                <div className="introduce__space"></div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>1998.01</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      Born in Gifu, Japan.
                    </p>
                  </div>
                </div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>2018.03</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      Graduated from Department of Design, Salesian Polytechnic
                    </p>
                  </div>
                </div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>2018.09–</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      The MG School of Latin Calligraphy
                    </p>
                  </div>
                </div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>2018.10–2019.03</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      Part-time at teamLab Inc. as a Designer.
                    </p>
                  </div>
                </div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>2019.04–2020.03</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      Part-time at Nippon Design Center On-screen Creative Division as a Assistant Designer.
                    </p>
                  </div>
                </div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>2020.03</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                    Graduated from Yoshihisa Shirai Seminar, <br />
                    Department of Visual Communication Design, Musashino Art Univ.
                    </p>
                  </div>
                </div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>2020.04–2021.03</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      Contract Employee at Nippon Design Center On-screen Creative Division as a Designer.
                    </p>
                  </div>
                </div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>2021.04–</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      Freelance Designer, Preparing to Study Abroad.
                    </p>
                  </div>
              </div>
              <div className="introduce__space"></div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>Contact</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                      TwitterのDMもしくはMessengerからご連絡ください。
                    </p>
                  </div>
                </div>
                <div className="introduce__space"></div>
                <div className='columns is-variable is-8'>
                  <div className='column is-3 is-offset-1'>
                    <h5 className='introduce__subhead'>Links</h5>
                  </div>
                  <div className='column is-7'>
                    <p className='introduce__body'>
                    <a className='introduce__body--link' href='https://twitter.com/wolphtype'>Twitter: @wolphtype</a><br />
                    <a className='introduce__body--link' href='https://www.instagram.com/wolphtype/'>Instagram: wolphtype</a><br />
                    <a className='introduce__body--link' href='https://dribbble.com/Wolphtype'>Dribbble: Masaki Ando</a><br/>
                    <a className='introduce__body--link' href='https://m.me/kuro.masaki.ando/'>Messenger: Masaki Ando</a>
                    </p>
                  </div>
              </div>
              <div className="columns">
                <div className="column is-3 is-offset-1">
                  <div className="introduce__photo">
                    <Image
                      src='/assets/profile_light.jpg'
                      alt='プロフィール写真'
                      layout='responsive'
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
              </div>
              <div className='introduce'>
                <div className='columns is-variable is-8'>
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
    line-height: 66px;
    font-weight: normal;
    text-align: right;
    color: #0B4D58;
  }
}
.introduce{
  margin-top: 84px;
  &__head{
    font-size: 23px;
    font-family: 'Koga Sans Medium', sans-serif;
    line-height: 28px;
    @media (min-width:1408px){
      font-size: 27px;
      line-height: 32px;
    }
  }
  &__subhead{
    font-size: 16px;
    font-family: 'Koga Sans Medium', TazuganeGothicStdN-Medium, sans-serif;
    line-height: 28px;
    font-feature-settings: "tnum";
    @media (min-width:1408px){
      font-size: 21px;
      line-height: 32px;
    }
  }
  &__body{
    font-size: 16px;
    font-family: 'Koga Sans Regular', TazuganeGothicStdN-Book, sans-serif;
    line-height:28px;
    @media (min-width:1408px){
      font-size: 21px;
      line-height: 32px;
    }
    &--link{
      transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
      z-index: 2;
      position: relative;
      &:hover{
        color: #0B4D58;
        background-color: transparent;
        &:before{
          left: 0%;
          right: auto;
          width: 100%;
        }
      }
      &:before{
        display: block;
        position: absolute;
        top: 0;
        right: 0px;
        height: 100%;
        width: 0px;
        z-index: -1;
        content: '';
        color: #000 !important;
        background: #F5C51D;
        transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
      }
    }
  }
  &__photo{
    margin-top: -28px;
    @media (min-width:1408px){
      font-size: 21px;
      line-height: 32px;
    }
  }
  &__logo{
    margin-top: 84px;
  }
  &__space{
    height: 28px;
  }
}
`
