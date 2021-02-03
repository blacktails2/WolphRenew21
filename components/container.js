import styled from 'styled-components'

function Container({ children }) {
  return <Box>{children}</Box>
}

export default Container

const Box = styled.div`
padding-right: 7vw;
padding-left: 7vw;
`;
