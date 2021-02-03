import Link from 'next/link';
import styled from 'styled-components'
import Container from '../components/container'

const Footer = () => (
  <StyledFooter>
    <Container>
      <div className="row">
        <div className='column column-80 column-offset-10'>
          <div className='footer'>
            <p className="footer__text--link"><a href="https://twitter.com/wolphtype">Twitter</a></p>
            <p className="footer__text--link"><a href="https://www.instagram.com/wolphtype/">Instagram</a></p>
            <p className="footer__text--link"><a href="https://dribbble.com/Wolphtype">Dribbble</a></p>
            <p className="footer__text--link"><a href="">contact@wolph.design</a></p>
            <div className="footer__space"></div>
            <p className="footer__text--link"><a href="#">Back Top↑</a></p>
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
    }
  }
}
`;
