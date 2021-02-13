import styled from 'styled-components';
import Head from 'next/head'
import Menus from '../components/menus'
import Footer from '../components/footer'

function Layout(props) {
  const { title, children } = props
  const siteTitle = "Wolph"
  return (
  <Home>
    <Head>
        <title>{title} « {siteTitle}</title>
        <link rel='icon' href='/favicon.ico'/>
    </Head>
    <Menus/>
    {children}
    <Footer/>
  </Home>
  )}

export default Layout

const Home = styled.div`
`;
