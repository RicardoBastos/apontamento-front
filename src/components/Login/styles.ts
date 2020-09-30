import styled from 'styled-components';

import ImageOne from '../../assets/images/fundoUm.jpeg';
import ImageTwo from '../../assets/images/fundoDois.jpeg';
import ImageThree from '../../assets/images/fundoTres.jpeg';
import ImageFour from '../../assets/images/fundoQuatro.jpeg';

import Pattern from '../../assets/images/pattern.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;

  .cb-slideshow,
  .cb-slideshow:after {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 0;
    list-style: none;
    content: '';
    background: transparent url(${Pattern}) repeat top left;
  }
  .cb-slideshow li span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: none;
    opacity: 0;
    z-index: 0;
    animation: imageAnimation 36s linear infinite 0s;
  }

  .cb-slideshow li:nth-child(1) span {
    background-image: url(${ImageOne});
  }

  .cb-slideshow li:nth-child(2) span {
    background-image: url(${ImageTwo});
    animation-delay: 9s;
  }

  .cb-slideshow li:nth-child(3) span {
    background-image: url(${ImageThree});
    animation-delay: 18s;
  }
  .cb-slideshow li:nth-child(4) span {
    background-image: url(${ImageFour});
    animation-delay: 27s;
  }

  @keyframes imageAnimation {
    0% {
      opacity: 0;
      animation-timing-function: ease-in;
    }
    8% {
      opacity: 1;
      animation-timing-function: ease-out;
    }
    17% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
  min-height: 40vh;
  width: 100%;
  opacity: 0.98;

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 900px;
  }
`;

export const Empresa = styled.div`
  background: #2d3035;
  flex: 1 1 0px;
  color: #fff;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 40px;
`;

export const Form = styled.div`
  background: #22252a;
  flex: 1 1 0px;
  border-bottom-right-radius: 40px;

  form {
    padding: 60px 50px;
  }
`;
