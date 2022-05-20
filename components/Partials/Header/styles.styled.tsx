import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  position: relative;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.gray};
    position: absolute;
    bottom: -1px;
  }

  &::before {
    right: 0;
    transform: translateX(-100%);
  }

  &::after {
    left: 0;
    transform: translateX(100%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.secondary};
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export { Header, Wrapper, Icon, Title };
