import Link from 'next/link';
import styled from 'styled-components'
import Container from '../components/container'
import Image from 'next/image'
import { useRouter } from 'next/router'



const Menus = () => (
  <StyledMenus>
    <Container>
      <div className="menus columns">
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
