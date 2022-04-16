import styled from "styled-components";

const Badge = styled.span`
  display: inline-block;
  padding: 0.5rem 0.75rem;
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.colors.primary};
  font-size: .875rem;
  font-weight: 500;
  width: 5rem;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;

  &.-urgent {
    background-color: ${(props) => props.theme.colors.urgent};
  }

  &.-regular {
    background-color: ${(props) => props.theme.colors.regular};
  }

  &.-trivial {
    background-color: ${(props) => props.theme.colors.trivial};
  }
`;

export { Badge };
