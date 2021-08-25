import { Container, Content, Detalhes, DetalheBeneficiario, DetalhePedido, Row } from "./styles";

export function Detalhe() {
  return (
    <Container>
      <Content>
        <div className="titulo">
          <h2>detalhes da cobrança  -  254  donec pulvinar non auctor volupat</h2>
        </div>
        <Detalhes>
          <DetalhePedido>

            <div className="status-pedido">
              <span>Status Cancelado</span>
            </div>

            <h2>Pedido</h2>

            <Row>
              <label>Número</label>
              <p>00031285579999940059</p>
            </Row>

            <Row>
              <label>Número da Carteira</label>
              <p>17</p>
            </Row>

            <Row>
              <label>Variação da Carteira</label>
              <p>35</p>
            </Row>

            <Row>
              <label>Código do Cliente</label>
              <p>704950857</p>
            </Row>

            <Row>
              <label>Linha Digitável</label>
              <p>00190000090312855799299940059175887640000010000</p>
            </Row>

            <Row>
              <label>Código de Barra Numérico</label>
              <p>00198876400000100000000003128557999994005917</p>
            </Row>

            <Row>
              <label>Contrato Bancário</label>
              <p>19581316</p>
            </Row>

            <div className="comprovacao">
              <button>x</button>
              <p>Indicador de Comprovação</p>
            </div>
          </DetalhePedido>

          <DetalheBeneficiario>
            <h2>Beneficiario</h2>

            <Row>
              <label>Agência</label>
              <p>452</p>
            </Row>

            <Row>
              <label>Conta Corrente</label>
              <p>123873</p>
            </Row>

            <Row>
              <label>Logradouro</label>
              <p>RUA 16 LOTE 1</p>
            </Row>

            <Row>
              <label>Bairro</label>
              <p>SUL (AGUAS CLARAS)</p>
            </Row>

            <Row>
              <label>Cidade</label>
              <p>BRASILIA</p>
            </Row>

            <Row>
              <label>Estado</label>
              <p>DF</p>
            </Row>

            <Row>
              <label>CEP</label>
              <p>71940180</p>
            </Row>
          </DetalheBeneficiario>
        </Detalhes>
      </Content>
    </Container>
  );
}