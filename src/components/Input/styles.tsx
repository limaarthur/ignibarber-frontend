import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 1rem;
  width: 100%;
  color: #666360;

  & + div {
      margin-top: 0.8rem;
    }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #F4EDE8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;