import { Container, Content, Title } from "./styles";
import logoImg from "../../assets/logo.svg";
import settingsImg from "../../assets/settings.svg";
import logoutImg from "../../assets/logout.svg";
import paymentsImg from "../../assets/payments.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo coppetec" />
        <div className="menu-right">
          <img src={settingsImg} alt="logo coppetec" />
          <img src={logoutImg} alt="logo coppetec" />
          <img className="user" src={logoImg} alt="logo coppetec" />
          <p>Nome do usuário</p>
        </div>
      </Content>
      <Title>
        <img src={paymentsImg} alt="logo coppetec" />
        <h1>Cobranças</h1>
      </Title>
    </Container>
  );
}