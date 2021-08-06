import { Container, Content } from "./styles";

export function Filtro() {
  return (
    <Container>
      <Content>
        <h2>filtro de pesquisa</h2>

        <div className="input-area">
          <div className="input">
            <label>Período</label>
            <input value="" />
          </div>

          <div className="input">
            <label>Evento</label>
            <input value="" />
          </div>

          <div className="input">
            <label>Id da cobrança</label>
            <input value="" />
          </div>

          <div className="input">
            <label>Situação</label>
            <select>
              <option></option>
              <option>Aguardando</option>
              <option>Cancelado</option>
              <option>Pago</option>
            </select>
          </div>
        </div>

        <button>Buscar</button>
      </Content>
    </Container>
  );
}