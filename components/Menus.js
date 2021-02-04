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
    padding: 5px;
    margin-left : 20px;
    transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
    display: inline-block;
    position: relative;
    font-family: 'Koga Sans Medium', sans-serif;
    z-index: 2;
    &:hover{
      color: #0B4D58;
      background-color: transparent;
      &:before{
        left: 0%;
        right: auto;
        width: 100%;
        transform: translateY(-50%) skewY(-10deg);
      }
    }
    &:before{
      display: block;
      position: absolute;
      top: 50%;
      right: 0px;
      height: 60%;
      width: 0px;
      z-index: -1;
      content: '';
      color: #000 !important;
      background: #F5C51D;
      transition: all 0.4s cubic-bezier(0.42, 0, 0.58, 1);
      transform: translateY(-50%) skewY(-10deg);
    }
  }
`;
