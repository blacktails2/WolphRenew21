import styled from 'styled-components';
import Head from 'next/head'
import Menus from '../components/menus'
import Footer from '../components/footer'

function Layout({ children }) {
  return (
  <Home>
      <Menus/>
      {children}
      <Footer/>
  </Home>
  )}

export default Layout

const Home = styled.div`
background-color: #F0E5D1;
`;
