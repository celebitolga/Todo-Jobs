import styled from "styled-components";

const Button = styled.button`
  width: min-content;
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.black.default};
  outline: 0;
  color: ${(props) => props.theme.colors.black.default};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.colors.white};

  &:hover {
    opacity: 0.93;
  }

  &.-urgent {
    background-color: ${(props) => props.theme.colors.urgent};
    border-color: ${(props) => props.theme.colors.urgent};
    color: ${(props) => props.theme.colors.white};
  }

  &.-regular {
    background-color: ${(props) => props.theme.colors.regular};
    border-color: ${(props) => props.theme.colors.regular};
    color: ${(props) => props.theme.colors.white};
  }

  &.-trivial {
    background-color: ${(props) => props.theme.colors.trivial};
    border-color: ${(props) => props.theme.colors.trivial};
    color: ${(props) => props.theme.colors.white};
  }

  &.-gray {
    background-color: ${(props) => props.theme.colors.gray};
    border-color: ${(props) => props.theme.colors.gray};
    color: ${(props) => props.theme.colors.darkGray};
  }

  &.-ghost {
    background-color: ${(props) => props.theme.colors.transparent};
    border-color: ${(props) => props.theme.colors.transparent};
  }

  &.-w-full {
    width: 100%;
  }
`;

const Icon = styled.span`
  margin-right: 0.25rem;
  color: ${(props) => props.theme.colors.black.default};

  &.-urgent {
    background-color: ${(props) => props.theme.colors.urgent};
    border-color: ${(props) => props.theme.colors.urgent};
    color: ${(props) => props.theme.colors.white};
  }

  &.-regular {
    background-color: ${(props) => props.theme.colors.regular};
    border-color: ${(props) => props.theme.colors.regular};
    color: ${(props) => props.theme.colors.white};
  }

  &.-trivial {
    background-color: ${(props) => props.theme.colors.trivial};
    border-color: ${(props) => props.theme.colors.trivial};
    color: ${(props) => props.theme.colors.white};
  }

  &.-gray {
    background-color: ${(props) => props.theme.colors.gray};
    border-color: ${(props) => props.theme.colors.darkGray};
    color: ${(props) => props.theme.colors.white};
  }

  &.-ghost {
    background-color: ${(props) => props.theme.colors.transparent};
    border-color: ${(props) => props.theme.colors.transparent};
  }
`;

export { Button, Icon };
