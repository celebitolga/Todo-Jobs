import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: ${(props) => props.theme.colors.white};

  @media (min-width: ${(props) => props.theme.screens.md}) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: ${(props) => props.theme.screens.xl}) {
    max-width: ${(props) => props.theme.screens.xl};
  }
`;

export { Container };
