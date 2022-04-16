// styles
import * as S from "./styles.styled";

// iconst
import { AiFillGithub } from "react-icons/ai";

function Footer(): JSX.Element {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Link href="#">
          <S.Icon>
            <AiFillGithub />
          </S.Icon>
          <S.LinkText>Repository</S.LinkText>
        </S.Link>

        <S.Owner>© {new Date().getFullYear()} Tolga Çelebi</S.Owner>
      </S.Wrapper>
    </S.Footer>
  );
}

export default Footer;
