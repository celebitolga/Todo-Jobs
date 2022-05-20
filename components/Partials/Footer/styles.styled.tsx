import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: auto;
  background-color: ${(props) => props.theme.colors.gray};
  position: relative;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.gray};
    position: absolute;
    bottom: 0px;
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  color: ${(props) => props.theme.colors.darkGray};
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Icon = styled.div`
  font-size: 2rem;
`;

const LinkText = styled.p`
  text-decoration: underline;
  font-size: 1rem;
`;

const Owner = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.darkGray};
`;

export { Footer, Wrapper, Icon, Link, LinkText, Owner };
