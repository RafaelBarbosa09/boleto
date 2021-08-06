import styled from "styled-components";

export const Container = styled.div`
  background: var(--shape);
  border-radius: .5rem;
  border: 1px solid rgba(0,0,0,.125);
  padding: 1rem 2rem;
  /* box-shadow: 0 6px 10px -4px rgb(0 0 0 / 15%); */
`;

export const Content = styled.div`
  h2 { 
    color: var(--green-light);
    font-weight: 400;
  }

  input, select { 
    font-size: 1rem; 
    padding: .8rem;
    margin: .5rem 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button { 
    background: var(--button);
    color: var(--shape);
    border: 0;
    padding: .6rem;
    border-radius: .3rem;
    font-size: .9rem;
    margin-top: .5rem;
  }

  div.input-area {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 1.5rem;
  }

  .input {
    display: flex;
    flex-direction: column;

    &+.input {
      margin-left: 1rem;
    }
  }
`;