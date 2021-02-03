import styled from 'styled-components';

function Layout({ children }) {
  return <Home>{children}</Home>
}

export default Layout

const Home = styled.div`
background-color: #F0E5D1;
`;
