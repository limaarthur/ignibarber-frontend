import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #FF9000;
  height: 3.5rem;
  border-radius: 10px;
  border: 0;
  padding: 0 1rem;
  color: #312E38;
  width: 100%;
  font-weight: 500;
  margin-top: 0.8rem;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, '#FF9000')};
  }
`;