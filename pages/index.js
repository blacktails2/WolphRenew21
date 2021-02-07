import styles from '../styles/Home.module.css'
import Menus from '../components/menus'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Container from '../components/container'
import styled from 'styled-components'

export default function Home(props) {
  return (
    <Layout title="Home">
      <>
      </>
      <StyledIndex>
        <Container>

        </Container>
      </StyledIndex>
      </Layout>
  )
}

const StyledIndex = styled.div`
background-color: #F0E5D1;
`;
