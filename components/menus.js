import Link from '../components/activelink';
import styled from 'styled-components'
import Container from '../components/container'
import Image from 'next/image'



const Menus = () => (
  <StyledMenus>
    <div className="menus">
    <Container>
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <div className="menus__logotype">
            <Link href='/'>
              <a><Image
                src='/assets/logotype.svg'
                alt='Wolph.designのホームに戻る'
                width={250}
                height={100}
              /></a>
            </Link>
          </div>
        </div>
        <div className="column menus__links">
          <Link activeClassName='active' href='/'>
            <a className='linktext'><div className='linktext--box'>Works</div></a>
          </Link>
          <Link activeClassName='active' href='/about'>
            <a className='linktext'><div className='linktext--box'>About</div></a>
          </Link>
          <Link activeClassName='active' href='/blog'>
            <a className='linktext'><div className='linktext--box'>Blog</div></a>
          </Link>
        </div>
      </div>
      </Container>
      </div>
  </StyledMenus>
);

export default Menus

const StyledMenus = styled.div`
width: 100%;
height: 170px;
.menus{
  width: 100%;
  top: 70px;
  position: fixed;
  &__logotype{
    display: flex;
    justify-content: center;
  }
  &__links{
    margin-top: 32px;
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
    transform: skewY(-10deg);
    &.active{
      color: #0B4D58;
      background-color: transparent;
      &:before{
        left: 0%;
        right: auto;
        width: 100%;
        transform: translateY(-50%);
      }
    }
    &:hover{
      color: #0B4D58;
      background-color: transparent;
      &:before{
        left: 0%;
        right: auto;
        width: 100%;
        transform: translateY(-50%);
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
      transform: translateY(-50%);
    }
    &--box{
      transform: skewY(10deg);
    }
  }
`;
