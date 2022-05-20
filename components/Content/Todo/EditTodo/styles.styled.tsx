import styled from "styled-components";

const Holder = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  background: ${(props) => props.theme.colors.black[500]};
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  padding: 2rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius.default};
  overflow-y: auto;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    max-width: ${(props) => props.theme.screens.sm};
    padding: 2rem;
  }
`;

const Title = styled.h3`
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`

const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  &.-buttons {
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    gap: 1rem 0;

    button {
      width: 100%;
      justify-content: center;
    }

    @media (min-width: ${(props) => props.theme.screens.sm}) {
      flex-direction: row;
      gap: 0 1rem;
    }
  }
`

export { Holder, Wrapper, Title, Form, FormControl };
