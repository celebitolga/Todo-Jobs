import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    flex-direction: row;
    gap: 0 1rem;
  }
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    &:nth-child(1) {
      width: clamp(350px, 60%, 650px);
    }

    &:nth-child(2) {
      flex: 1;
    }
  }
`;

const Paragraph = styled.p`
  margin-top: 0.5rem;
  font-size: 0.75rem;

  &.-error {
    color: ${(props) => props.theme.colors.error};
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 1.5rem;

  @media (min-width: ${(props) => props.theme.screens.md}) {
    margin-top: 1.625rem;
    margin-left: 0.5rem;
  }
`;

export { Wrapper, Title, Form, FormControl, ButtonWrapper, Paragraph };
