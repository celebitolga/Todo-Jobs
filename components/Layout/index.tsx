// styles
import { Container } from "./styles.styled";

// components
import Header from "../Header/index";
import Footer from "../Footer/index";

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
