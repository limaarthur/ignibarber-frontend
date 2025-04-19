import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({children, ...props} : ButtonProps) {
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}