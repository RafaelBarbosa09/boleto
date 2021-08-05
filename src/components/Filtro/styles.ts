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
`;