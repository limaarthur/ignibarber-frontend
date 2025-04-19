import logoImg from '../../assets/logo.svg';

import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

export function SignIn() {
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="E-mail" />

          <input type="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="Login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />

    </Container>
  )
}