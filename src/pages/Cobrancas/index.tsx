import { Filtro } from "../../components/Filtro";
import { Header } from "../../components/Header";
import { Main } from "./styles";

export function Cobranca() {
  return (
    <>
      <Header />
      <Main>
        <Filtro />
      </Main>
    </>
  );
}