import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

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

    color: #FF9000;
    margin-top: 1.5rem;
    text-decoration: none;
    transition: 0.2s;

    svg {
      margin-right: 1rem;
    }

    &:hover {
      color: ${shade(0.2, '#FF9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;