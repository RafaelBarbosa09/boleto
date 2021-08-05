import styled from "styled-components";

export const Container = styled.header`
  background: var(--shape);
`;

export const Title = styled.div`
  display: flex;
  background: linear-gradient(to left, hsl(150, 100%, 11%), hsl(172, 77%, 11%), hsl(216, 47%, 17%));
  padding: 1rem 2rem;

  h1 {
    font-size: 3rem;
    font-weight: 400;
    margin-left: 1rem;
    color: var(--shape);
  }
`;

export const Content = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.menu-right { 
    display: flex;
    align-items: center;
    justify-content: center;

    img { 
      &+img {
        margin-left: 1rem;
      }
    }

    p { 
      margin-left: .8rem;
    }
  }

  .user {
    border-radius: 50%;
    background: green;
    height: 3rem;
    width: 3rem;
  }
`;