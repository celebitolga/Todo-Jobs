import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.colors.white};
  outline: none;
  padding-left: 1rem;
  padding-right: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;

  &::-ms-expand {
    display: none;
  }

  &.-error {
    border-color: ${(props) => props.theme.colors.error};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.trivial};
  }
`;

export { Select };
