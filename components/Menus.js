import Link from 'next/link';
import styled from 'styled-components'
import Container from '../components/container'

const Menus = () => (
  <StyledMenus>
    <Container>
      <div className="menus">
        <div className="column"></div>
        <div className="column">
          <Link href='/'>
            <a><img className='menus__logotype' src='../assets/logotype.svg' alt='Wolph.designのホームに戻る' /></a>
          </Link>
        </div>
        <div className="column menus__links">
          <Link href='/'>
            <a className='linktext'>Works</a>
          </Link>
          <Link href='/about'>
            <a className='linktext'>About</a>
          </Link>
          <Link href='/blog'>
            <a className='linktext'>Blog</a>
          </Link>
        </div>
      </div>
    </Container>
  </StyledMenus>
);

export default Menus

const StyledMenus = styled.div`
padding-top: 70px;
width: 100%;
.menus{
  display: flex;
  justify-content: space-between;
  .column{
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
  }
  &__logotype{
    width: 250px;
    margin: 0 auto;
    display: block;
  }
  &__links{
    margin-top: 22px;
    text-align: right;
  }
}
.linktext{
    font-size: 24px;
    margin-left : 30px;
  }
`;
