import styled from "styled-components";

export const Container = styled.div`
  background: var(--shape);
  border-radius: .5rem;
  border: 1px solid rgba(0,0,0,.125);
  /* padding: 1rem 2rem; */
  margin-bottom: 2rem;
`;

export const Content = styled.div`
  h2 { 
    color: var(--blue);
    font-weight: 400;
  }

  .titulo {
    background: var(--green-dark);
    border-top-right-radius: .5rem;
    border-top-left-radius: .5rem;
    padding: 2rem;

    h2{
      color: var(--shape);
      text-transform: uppercase;
    }
  }
`;

export const Detalhes = styled.div`
  background: var(--shape);
  border-bottom-right-radius: .5rem;
  border-bottom-left-radius: .5rem;

  display: flex;
`;

export const DetalhePedido = styled.div`
  padding: 2rem;

  h2 {
    padding: 1rem 0;
    font-size: 2rem;
  }

  .status-pedido {
    background-color: var(--red);
    width: 11rem;
    font-size: 1.2rem;
    border-radius: .3rem;
    padding: .5rem;
    text-align: center;
    color: var(--shape);
  }

  .comprovacao {
    display: flex;
    align-items: center;

    padding: .5rem 0;

    label {
      color: var(--blue);
    }

    p {
      margin-left: 1rem;
      color: var(--text-table);
    }

    button {
      background: var(--button);
      color: var(--shape);
      border: none !important;
      padding: .5rem .9rem;
      border-radius: .3rem;
      font-size: 1.3rem;
    }
  }
`;

export const DetalheBeneficiario = styled.div`
  padding: 4rem 2rem 2rem 2rem;

  h2 {
    padding: 1rem 0;
    font-size: 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  padding: .5rem 0;

  label {
    color: var(--blue);
  }

  p {
    margin-left: 1rem;
    color: var(--text-table);
  }
`;