import type { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';
import type React from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function Input({icon: Icon, ...rest} : InputProps) {
  return(
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest}>
      </input>
    </Container>
  )
}