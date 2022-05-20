// styles
import { Container } from "./styles.styled";

// components
import { Header, Footer } from '@Components';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;
