import Link from 'next/link';
import styled from 'styled-components'
import Container from '../components/container'

const Footer = () => (
  <StyledFooter>
    <Container>
      <div className="row">
        <div className='column column-80 column-offset-10'>
          <div className='footer'>
            <svg version="1.1" className="footer__symbol" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 74 70" xmlSpace="preserve">
<g>
	<path className="st0" d="M0.158,44.106l21.285-9.162l2.607,1.339l2.609-8.88l18.113-8.175l3.452,8.175l7.894-27.345L73.949,18.1
		L59.925,70.253L41.036,58.695l-4.581-10.713l-2.043,7.33l-6.908-3.735H6.854L0.158,44.106z"/>
</g>
</svg>
            <p className="footer__text"><a className="footer__text--link" href="https://twitter.com/wolphtype">Twitter</a></p>
            <p className="footer__text"><a className="footer__text--link" href="https://www.instagram.com/wolphtype/">Instagram</a></p>
            <p className="footer__text"><a className="footer__text--link" href="https://dribbble.com/Wolphtype">Dribbble</a></p>
            <p className="footer__text"><a className="footer__text--link" href="">contact@wolph.design</a></p>
            <div className="footer__space"></div>
            <p className="footer__text"><a className="footer__text--link" href="#">Back Top↑</a></p>
            <div className="footer__space"></div>
            <p className='footer__text'>Copyright 2021 Wolph / Masaki Ando</p>
          </div>
        </div>
      </div>
    </Container>
  </StyledFooter>
);

export default Footer

const StyledFooter = styled.div`
width: 100%;
padding: 84px 0;
background-color: #0B4D58;
.footer{
  font-family: 'Koga Sans Medium', sans-serif;
  &__symbol{
    fill: #F5C51D;
    height: 50px;
    margin-bottom: 62px;
  }
  &__space{
    height:28px;
  }
  &__text{
    font-size: 21px;
    color: white;
    line-height: 28px;
    margin: 0;
    &--link{
      font-size: 21px;
      color: white;
      line-height: 28px;
      margin: 0;
      transition: ease all 0.2s;
      &:hover{
        color: #F5C51D;
      }
    }
  }
}
`;
