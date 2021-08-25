import { Detalhe } from "../../components/Detalhe";
import { Filtro } from "../../components/Filtro";
import { Header } from "../../components/Header";
import { Main } from "./styles";

export function Cobranca() {
  return (
    <>
      <Header />
      <Main>
        <Detalhe />
        <Filtro />
      </Main>
    </>
  );
}