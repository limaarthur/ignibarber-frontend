import logoImg from '../../assets/logo.svg';

import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Container, Content, Background } from './styles';

export function SignUp() {
  return(
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu cadastro</h1>

          <Input 
            name="name" 
            icon={FiUser} 
            placeholder="Nome" 
          />

          <Input 
            name="email" 
            icon={FiMail} 
            placeholder="E-mail" 
          />

          <Input 
            name="password" 
            icon={FiLock} 
            type="password" 
            placeholder="Senha" 
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="Login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  )
}