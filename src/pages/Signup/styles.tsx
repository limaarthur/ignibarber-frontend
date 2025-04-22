import styled from 'styled-components';
import { shade } from 'polished';

import signUnBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 44rem;

  form {
    margin: 5rem 0;
    width: 21rem;
    text-align: center;

    h1 {
      margin-bottom: 1.5rem;
    }
    
    a {
      color: #F4EDE8;
      display: block;
      margin-top: 1.5rem;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4EDE8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;

    color: #F4EDE8;
    margin-top: 1.5rem;
    text-decoration: none;
    transition: 0.2s;

    svg {
      margin-right: 0.5rem;
    }

    &:hover {
      color: ${shade(0.2, '#F4EDE8')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUnBackgroundImg}) no-repeat center;
  background-size: cover;
`;