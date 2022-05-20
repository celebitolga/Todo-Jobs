import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;

  &.-error {
    border-color: ${(props) => props.theme.colors.error};
  }

  &.-with-icon {
    padding-left: 2rem;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.trivial};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray};
    color: ${(props) => props.theme.colors.darkGray};
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  font-size: 1rem;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.darkGray};
`;

export { Wrapper, Input, Icon };
